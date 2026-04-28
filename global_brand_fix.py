import os
import re

REPOS = [
    "/home/BigBossOffice/Documents/havenly-backend",
    "/home/BigBossOffice/Documents/havenly-dashboard",
    "/home/BigBossOffice/Documents/havenly-marketing"
]

EXCLUDE_DIRS = {".git", "node_modules", ".next", "dist"}
EXTENSIONS = {".ts", ".tsx", ".js", ".jsx", ".md", ".json", ".html"}

def remove_emojis(text):
    # Regex to catch a wide range of emojis
    emoji_pattern = re.compile("["
        "\U0001f600-\U0001f64f" # emoticons
        "\U0001f300-\U0001f5ff" # symbols & pictographs
        "\U0001f680-\U0001f6ff" # transport & map symbols
        "\U0001f1e0-\U0001f1ff" # flags (iOS)
        "\U00002702-\U000027b0"
        "\U000024c2-\U0001f251"
        "\u2600-\u26FF"
        "\u2700-\u27BF"
        "]+", flags=re.UNICODE)
    
    # Specific replacements as requested
    text = text.replace("✅", "")
    text = text.replace("❌", "")
    text = text.replace("⚠️", "")
    text = text.replace("🔒", "")
    text = text.replace("🚨", "")
    text = text.replace("🚀", "")
    
    # Strip any remaining emojis
    text = emoji_pattern.sub(r'', text)
    return text

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception:
        return

    original_content = content
    
    # 1. Branding rename
    # "Havenly" (standalone, skip if lowercase)
    content = re.sub(r'(?<![a-z0-9])Havenly(?![a-z0-9])', 'Havenly Solutions', content)
    # "HAVENLY" (standalone)
    content = re.sub(r'(?<![a-zA-Z0-9])HAVENLY(?![a-zA-Z0-9])', 'HAVENLY SOLUTIONS', content)
    
    # @havenly.app -> @havenly.solutions
    content = content.replace("@havenly.app", "@havenly.solutions")
    
    # 2. Package names
    if os.path.basename(filepath) == "package.json":
        content = content.replace('"havenly-backend"', '"havenly-solutions-backend"')
        content = content.replace('"havenly-dashboard"', '"havenly-solutions-dashboard"')
        content = content.replace('"havenly-marketing"', '"havenly-solutions-marketing"')

    # 3. Emoji removal
    content = remove_emojis(content)
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

modified_files = []

for repo_path in REPOS:
    for root, dirs, files in os.walk(repo_path):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        for file in files:
            if any(file.endswith(ext) for ext in EXTENSIONS):
                filepath = os.path.join(root, file)
                if process_file(filepath):
                    modified_files.append(filepath)

print(f"Total modified files: {len(modified_files)}")
# for f in modified_files:
#     print(f" - {f}")
