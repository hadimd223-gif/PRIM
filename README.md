# NEXORA GAMING — নতুন সেটআপ

## ফাইল কোথায় যাবে
**Vercel (`vercel-site/` ফোল্ডার)** — index.html, admin.html, login.html, firebase-messaging-sw.js, 404.html, vercel.json
**Python হোস্ট (`backend/` ফোল্ডার)** — main.py, requirements.txt, serviceAccount.json (বা env `FIREBASE_KEY_JSON`)
**Firebase Console** — `firestore.rules` এর লেখা Rules-এ পেস্ট করুন

## কে কী করে
- index.html / admin.html -> সরাসরি Firebase Firestore (রিয়েলটাইম), রুলস দিয়ে সুরক্ষিত
- main.py -> শুধু ব্যাকএন্ডের কাজ: Like API (daily/auto/order worker), পেমেন্ট, প্রোমো, রেফারেল, অ্যান্টি-ফ্রড, পুশ, ইত্যাদি
- লগইন -> login.html (আপনার নিজের পেজ, Google Identity)

## ১. এই ৩টি জায়গায় `YOUR_BACKEND_URL` বদলান
index.html, admin.html, login.html -> আপনার main.py এর URL (শেষে `/` নেই), যেমন `https://xxxx.onrender.com`

## ২. Google লগইন (আপনার নিজের)
1. Firebase Console -> Authentication -> Sign-in method -> Google -> Enable
2. ওখানেই "Web SDK configuration" এ **Web client ID** আছে, কপি করে login.html এর `GOOGLE_CLIENT_ID` এ বসান
3. Google Cloud Console -> APIs & Services -> Credentials -> ওই Web client -> **Authorized JavaScript origins** এ আপনার Vercel ডোমেইন দিন (https://your-site.vercel.app)
4. Firebase -> Authentication -> Settings -> Authorized domains এ Vercel ডোমেইন যোগ করুন
(Client ID না দিলে আগের Firebase popup পদ্ধতিতে চলবে।)

## ৩. Firestore Rules
Firebase Console -> Firestore -> Rules -> `firestore.rules` এর পুরো লেখা পেস্ট -> Publish

## ৪. নিজেকে অ্যাডমিন বানান
একবার লগইন করুন, তারপর Firestore -> users -> আপনার ডকুমেন্ট -> `role` = `admin`

## ৫. serviceAccount.json সমস্যা
Firebase Console -> Project settings -> Service accounts -> **Generate new private key** (web config নয়!)
- ফাইল main.py এর পাশে `serviceAccount.json` নামে রাখুন, অথবা
- ফাইলের পুরো লেখা env `FIREBASE_KEY_JSON` এ দিন
`https://আপনার-backend/health` এ `"firebase": "ok"` দেখালে ঠিক আছে, নাহলে ওখানেই কারণ লেখা থাকবে।

## ৬. ব্যাকএন্ড চালানো
    pip install -r requirements.txt
    python main.py          (হোস্টে: gunicorn main:app)
Optional env: `ALLOWED_ORIGINS=https://your-site.vercel.app`

## নিরাপত্তা
main.py এর CONFIG এ আপনার পেমেন্ট/টেলিগ্রাম/API কী লেখা আছে। main.py কখনো পাবলিক রিপোতে দেবেন না, আর যেহেতু এগুলো চ্যাটে শেয়ার হয়েছে, সম্ভব হলে কী গুলো বদলে নিন।
