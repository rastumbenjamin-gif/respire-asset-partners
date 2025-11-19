# Contact Form Setup Guide

Your contact form is now configured to send emails to you. Follow these steps to activate it.

## Option 1: Formspree (Recommended - Easiest)

### Setup Steps:

1. **Go to [Formspree.io](https://formspree.io)**
   - Click "Get Started" or "Sign Up"
   - Create a free account (or sign in with Google/GitHub)

2. **Create a New Form**
   - Click "New Form"
   - Form name: "REspire Contact Form"
   - Email: `benjamin@respire.icu` (this is where submissions will be sent)

3. **Get Your Form Endpoint**
   - After creating the form, you'll see something like: `https://formspree.io/f/xyzabc123`
   - Copy this URL

4. **Update index.html**
   - Open `index.html`
   - Find line 307: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace `YOUR_FORM_ID` with your actual form ID (just the ID part after `/f/`)
   - Example: `action="https://formspree.io/f/xyzabc123"`

5. **Test It!**
   - Open your website
   - Fill out the contact form
   - Submit it
   - Check your email at benjamin@respire.icu
   - You should receive the form submission

### Formspree Free Tier Limits:
- 50 submissions per month
- Email notifications
- Spam filtering included
- No credit card required

---

## Option 2: Web3Forms (No Account Needed)

If you want something even simpler with no signup:

1. **Go to [Web3Forms.com](https://web3forms.com)**

2. **Get Your Access Key**
   - Enter your email: `benjamin@respire.icu`
   - Click "Get Access Key"
   - Check your email for the access key

3. **Update index.html**
   - Change line 307 from:
     ```html
     action="https://formspree.io/f/YOUR_FORM_ID"
     ```
   - To:
     ```html
     action="https://api.web3forms.com/submit"
     ```

4. **Add Access Key Field**
   - After line 337 (after the message textarea), add:
     ```html
     <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
     ```

5. **Remove Formspree-specific fields** (lines 340-341)

### Web3Forms Free Tier:
- 250 submissions per month
- No signup required
- Spam protection included

---

## Option 3: Email.js (More Features)

1. **Go to [EmailJS.com](https://www.emailjs.com)**
2. Sign up for free account
3. Connect your email service (Gmail, Outlook, etc.)
4. Get your Service ID, Template ID, and Public Key
5. I can help you update the JavaScript code if you choose this option

---

## Option 4: Your Own Backend

If you have your own server or want to use a cloud function (AWS Lambda, Google Cloud Functions, etc.), let me know and I can help set that up instead.

---

## Current Status

**Right now, your form is configured for Formspree but needs the form ID updated.**

The form will:
- ✅ Show a loading state when submitting ("Sending...")
- ✅ Display success message on successful submission
- ✅ Display error message if something goes wrong
- ✅ Include all form fields in the email
- ✅ Have a clear subject line: "New contact form submission - REspire Asset Partners"
- ✅ Reset the form after successful submission

---

## Testing After Setup

1. Open index.html in your browser
2. Fill out the form with test data
3. Click "Send Message"
4. You should see "Sending..." then a success message
5. Check benjamin@respire.icu for the email
6. First submission to Formspree might require email verification

---

## Troubleshooting

### Form doesn't submit
- Check that you've replaced `YOUR_FORM_ID` with your actual Formspree form ID
- Make sure you're testing on a web server (not just opening the file directly)
- Check browser console for errors (F12 → Console tab)

### Not receiving emails
- Check spam folder
- Verify the email address in Formspree dashboard
- Make sure Formspree form is "Active" (not in trial/verification mode)

### Formspree asks for verification on first submission
- This is normal! Just verify your email through Formspree
- After verification, all future submissions will work automatically

---

## Next Steps

1. Choose your preferred method (I recommend Formspree for simplicity)
2. Follow the setup steps above
3. Update the form action/access key in index.html
4. Test the form
5. You're done!

**Need help?** Let me know which method you chose and I can guide you through it!
