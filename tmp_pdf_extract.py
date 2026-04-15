import os, sys
path = r'c:\Users\mirza\Downloads\Company Profile -PICSARABIA Final (14).pdf'
if not os.path.exists(path):
    print('PDF not found:', path)
    sys.exit(0)
try:
    from PyPDF2 import PdfReader
except Exception as e:
    print('PyPDF2 not installed:', e)
    sys.exit(0)
reader = PdfReader(path)
for i, page in enumerate(reader.pages):
    text = (page.extract_text() or '').replace('\r', '\n')
    print('\n=== PAGE', i+1, '===\n')
    print(text[:2000])
