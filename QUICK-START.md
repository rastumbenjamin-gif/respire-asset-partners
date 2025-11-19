# Quick Start: Activate Your Contact Form

## 🚀 Get Your Form Working in 5 Minutes

### Step 1: Sign up for Formspree
1. Go to: **https://formspree.io/register**
2. Sign up with your email (or use Google/GitHub)
3. It's free - no credit card needed

### Step 2: Create Your Form
1. After logging in, click **"New Form"**
2. Name it: **"REspire Contact Form"**
3. Email address: **benjamin@respire.icu**
4. Click **"Create Form"**

### Step 3: Get Your Form ID
You'll see a form endpoint that looks like:
```
https://formspree.io/f/xyzabc123
```

Copy the **ID part** (the part after `/f/`). For example: `xyzabc123`

### Step 4: Update Your Website
1. Open the file: **index.html**
2. Press `Cmd+F` (Mac) or `Ctrl+F` (Windows) to search
3. Search for: `YOUR_FORM_ID`
4. Replace it with your actual form ID from Step 3
5. Save the file

**Before:**
```html
action="https://formspree.io/f/YOUR_FORM_ID"
```

**After:**
```html
action="https://formspree.io/f/xyzabc123"
```
*(use your actual ID)*

### Step 5: Test It!
1. Open **index.html** in your browser
2. Scroll to the contact form
3. Fill it out with test information
4. Click **"Send Message"**
5. Check your email: **benjamin@respire.icu**

---

## ✅ What You'll Get

Every time someone fills out your contact form, you'll receive an email with:
- **Name**: Their name
- **Email**: Their email address
- **Company**: Their company name
- **Interest**: What they're interested in (selling/buying/valuation/general)
- **Message**: Their message to you

---

## 🎯 Formspree Free Plan Includes:
- ✅ 50 form submissions per month
- ✅ Email notifications sent to benjamin@respire.icu
- ✅ Spam filtering (keeps bots away)
- ✅ Form analytics dashboard
- ✅ No "Powered by" watermark
- ✅ Archive of all submissions

---

## 💡 Tips

### If you need more than 50 submissions/month:
Upgrade to Formspree Gold ($10/month) for 1,000 submissions

### Want to receive submissions elsewhere too?
In Formspree dashboard, you can add multiple email addresses

### Want SMS notifications?
Formspree can integrate with Zapier to send you text messages

---

## 🔧 Troubleshooting

### "Form not found" error
- Make sure you replaced `YOUR_FORM_ID` with your actual form ID
- Double-check there are no typos

### Not receiving emails?
- Check your spam folder
- Verify the email in your Formspree dashboard
- The first submission might require email verification

### Form submits but redirects to Formspree page
- This is normal for the first submission
- After verifying your email, it will stay on your site

---

## 📞 Need Help?

If you run into any issues:
1. Check the **FORM-SETUP-GUIDE.md** for detailed instructions
2. Check Formspree's help docs: https://help.formspree.io
3. Or let me know and I'll help you troubleshoot!

---

**That's it! Your contact form will now send emails directly to benjamin@respire.icu** 🎉
