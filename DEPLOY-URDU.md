# Vercel par deploy karne ka tareeqa

1. ZIP ko extract karein. Andar salaar-portfolio-vercel-ready folder milega.
2. GitHub par nayi repository banayein. Filhal Private rakh sakte hain.
3. Is folder ke ANDAR ki files upload karein: public folder aur vercel.json repository ke pehle level par hone chahiye. ZIP file ko seedha upload na karein.
4. Vercel mein login karein → Add New → Project → GitHub repository import karein. Private repository ke liye Vercel ko us repository ka access dena hoga.
5. Project settings:
   - Framework Preset: Other
   - Root Directory: ./ (repository root)
   - Build Command: khali
   - Install Command: khali
   - Output Directory: public
   - Environment Variables: koi nahi
6. Deploy click karein. Successful deployment ke baad Vercel public URL dega.
7. URL par photo, project filters, project popup aur contact/LinkedIn links check karein.

vercel.json mein yeh settings pehle se hain. Root Directory ko public na karein; public Output Directory hai.

Agar GitHub par poora enclosing folder upload ho gaya ho, Root Directory mein salaar-portfolio-vercel-ready select karein.

Contact form email app mein draft kholta hai; visitor ko khud Send karna hoga. Source code private ho sakta hai jabke Vercel website public ho.
