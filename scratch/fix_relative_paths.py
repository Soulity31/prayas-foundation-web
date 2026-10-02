import os
import glob
import re

root = r"c:\Users\Dhruthi\Desktop\prayas-foundation-web"

# List all files to process in src/
src_files = glob.glob(os.path.join(root, "src", "**", "*.*"), recursive=True)
# List all HTML files in root
html_files = glob.glob(os.path.join(root, "*.html"))

all_files = src_files + html_files

modified_count = 0

for file_path in all_files:
    if any(p in file_path for p in ["dist", "node_modules", ".git"]):
        continue
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    original = content

    # 1. Fix /assets/ -> ./assets/ (avoid replacing if already ./assets/)
    # Replace "/assets/ with "./assets/
    content = content.replace('"/assets/', '"./assets/')
    content = content.replace("'/assets/", "'./assets/")
    content = content.replace("url('/assets/", "url('./assets/")
    content = content.replace('url("/assets/', 'url("./assets/')
    content = content.replace('href="/favicon.png"', 'href="./favicon.png"')

    # 2. Fix root navigation links: href="/page.html" -> href="./page.html"
    pages = ["index", "about", "school", "programs", "work", "impact", "contact", "partners", "admin"]
    for p in pages:
        content = content.replace(f'href="/{p}.html"', f'href="./{p}.html"')
        content = content.replace(f"href='/{p}.html'", f"href='./{p}.html'")
        content = content.replace(f"href: '/{p}.html'", f"href: './{p}.html'")
        content = content.replace(f'href: "/{p}.html"', f'href: "./{p}.html"')

    # 3. In HTML files, fix /src/ paths to ./src/
    if file_path.endswith(".html"):
        content = content.replace('href="/src/', 'href="./src/')
        content = content.replace('src="/src/', 'src="./src/')
        content = content.replace('href="/assets/', 'href="./assets/')

    if content != original:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        modified_count += 1
        print(f"Updated: {os.path.relpath(file_path, root)}")

print(f"\nCompleted! Total files updated: {modified_count}")
