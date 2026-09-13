from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
files = list(ROOT.glob("*.html")) + list(ROOT.glob("*.js"))
assert files, "no profile finder source found"
text = "\n".join(p.read_text(encoding="utf-8") for p in files).lower()
assert "github" in text
print("GitHub Profile Finder smoke check passed")
