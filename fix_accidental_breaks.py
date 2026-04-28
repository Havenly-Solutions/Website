import os
import re

REPOS = [
    "/home/BigBossOffice/Documents/havenly-backend",
    "/home/BigBossOffice/Documents/havenly-dashboard",
    "/home/BigBossOffice/Documents/havenly-marketing"
]

EXCLUDE_DIRS = {".git", "node_modules", ".next", "dist"}
EXTENSIONS = {".ts", ".tsx", ".js", ".jsx", ".md", ".json", ".html"}

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception:
        return

    original_content = content
    
    # Revert "Havenly SolutionsApp" to "HavenlyApp"
    # The error occurred because Havenly matched before an uppercase letter.
    # We should fix cases where Havenly Solutions is followed directly by an alpha char without space in the original code,
    # but that's hard now. So we'll look for specific broken patterns:
    # "Havenly Solutions[A-Z]" -> "HavenlySolutions[A-Z]"? 
    # Actually, usually HavenlyApp should be HavenlySolutionsApp or just HavenlyApp.
    # Given the brand rename, HavenlySolutionsApp (no space) or HavenlySolutions_App.
    # But for code compatibility, I'll use HavenlySolutionsApp (camelCase).
    
    content = content.replace("Havenly SolutionsApp", "HavenlySolutionsApp")
    content = content.replace("Havenly SolutionsProvider", "HavenlySolutionsProvider")
    content = content.replace("Havenly SolutionsContext", "HavenlySolutionsContext")
    content = content.replace("<Havenly SolutionsApp />", "<HavenlySolutionsApp />")
    
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
print(f"Fixed {modified_count} files for accidental camelCase breaks.")
