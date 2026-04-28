import os
import re

REPOS = [
    "/home/BigBossOffice/Documents/havenly-backend",
    "/home/BigBossOffice/Documents/havenly-dashboard",
    "/home/BigBossOffice/Documents/havenly-marketing"
]

EXCLUDE_DIRS = {".git", "node_modules", ".next", "dist"}
EXTENSIONS = {".ts", ".tsx", ".js", ".jsx"}

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception:
        return

    original_content = content
    
    # Target "Havenly Solutions[A-Z]" and turn it into "HavenlySolutions[A-Z]"
    content = re.sub(r'Havenly Solutions([A-Z])', r'HavenlySolutions\1', content)
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

modified_count = 0
for repo_path in REPOS:
    for root, dirs, files in os.walk(repo_path):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        for file in files:
            if any(file.endswith(ext) for ext in EXTENSIONS):
                if process_file(os.path.join(root, file)):
                    modified_count += 1
print(f"Exhaustive fix: {modified_count} files.")
