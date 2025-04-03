# spendr
ever since the pandemic, online shopping's gotten way too easy. like, you tap a button and it’s done. no friction, no second-guessing. for me, spending cash in person feels more real—you actually feel it leaving your hands. but online? money just disappears and you don’t even notice until your balance is gasping for air. i only realized it had become a problem for me a little too late when i couldn't afford to get some super exclusive taylor swift swag. 

that night, between sobs, i tried to muffle the sound by burying my face in a pillow, i tried to find alternatives to no avail. i looked at my cc history to see what the culprit was, but soon realized that it was just me, and all i could do now was plan how to manage my finances better to avoid this stituation from happening ever again. 

and soon spendr was born, the lovechild of night-long coding sprints and an ungodly amount of energy drinks, a lightweight finance app to help you stay on top of your spending and savings. spendr makes that invisible spending visible. track what’s leaving your account and what’s staying behind—with charts, filters, and clean interfaces to keep it simple.

## tech stack

- **framework**: [next.js](https://nextjs.org)
- **styling**: [tailwind css](https://tailwindcss.com)
- **database**: [supabase](https://supabase.com)
- **table**: [tanstack react table](https://tanstack.com/table/v8)
- **form**: [react hook form](https://react-hook-form.com)
- **charts**: [react chartjs 2](https://react-chartjs-2.js.org)
- **toaster**: [sonner](https://sonner.emilkowal.ski)
- **components**: [radix ui](https://www.radix-ui.com) + [shadcn ui](https://ui.shadcn.com)

## what it does

- sign in + log out
- create / read / update / delete your transactions
- auto-save everything to supabase
- visualize your spend patterns through charts

## run it locally

1. clone the repo
   ```bash
   git clone https://github.com/annecrypted/spendr.git
2. install the dependencies
   ```bash
   pnpm install
3. set up your env file
   ```bash
   cp .env.example .env.local
4. then add your environment variables
5. start dev server
