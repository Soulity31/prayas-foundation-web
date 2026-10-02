import os
import glob

root = r"c:\Users\Dhruthi\Desktop\prayas-foundation-web"
files = glob.glob(os.path.join(root, "src", "**", "*.*"), recursive=True) + glob.glob(os.path.join(root, "*.html"))

results = []
for f in files:
    if any(p in f for p in ["dist", "node_modules", ".git", "scratch"]):
        continue
    try:
        with open(f, "r", encoding="utf-8") as fh:
            content = fh.read()
            c_slash = content.count('"/assets/') + content.count("'/assets/")
            c_html = content.count('"/about.html') + content.count("'/about.html") + content.count('"/index.html') + content.count("'/index.html")
            if c_slash > 0 or c_html > 0:
                results.append((os.path.relpath(f, root), c_slash, c_html))
    except Exception:
        pass

print("Remaining absolute /assets/ or /<page>.html:", len(results), results)
