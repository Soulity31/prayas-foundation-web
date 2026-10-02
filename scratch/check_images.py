import os
import re

root = r"c:\Users\Dhruthi\Desktop\prayas-foundation-web"
content_file = os.path.join(root, "src", "data", "content.js")
work_file = os.path.join(root, "src", "data", "workContent.js")

with open(content_file, "r", encoding="utf-8") as f:
    c_text = f.read()

with open(work_file, "r", encoding="utf-8") as f:
    w_text = f.read()

pattern = re.compile(r'["\'](?:/|\./)assets/([^"\']+)["\']')
img_refs = set(pattern.findall(c_text + w_text))

assets_dir = os.path.join(root, "assets")
public_assets_dir = os.path.join(root, "public", "assets")

missing_assets = []
missing_public = []

for ref in sorted(img_refs):
    p1 = os.path.join(assets_dir, ref.replace('/', os.sep))
    p2 = os.path.join(public_assets_dir, ref.replace('/', os.sep))
    if not os.path.exists(p1): missing_assets.append(ref)
    if not os.path.exists(p2): missing_public.append(ref)

print("Total unique image refs:", len(img_refs))
print("Missing in assets/:", len(missing_assets), missing_assets)
print("Missing in public/assets/:", len(missing_public), missing_public)
