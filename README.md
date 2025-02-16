
## Getting Started

- First, install depencies

```bash 
npm install
```
 
- Then, run the development server:

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## A quick walkthrough

- When the main page(http://localhost:3000) loads, an array of dummy messages is loaded from a json file(src/constants/messages.json).
- The messages after loading are sorted by category(Today,Yesterday,Older) using their timestamps. The json file contains constant timestamps so by the time you load the page you might only see messages of category "Older".
- every chat you click on(in the second sections next to the sidebar) will be loaded in the right-most section where you can reply. the reply logic relies on redux and will be lost if the page is reloaded because it's not persistent.

## Known issues

you might encounter react hydration errors if you have grammarly web browser extension enabled. you can disable it temporary.

## Screenshots
![Screenshot 2025-02-16 113551](https://github.com/user-attachments/assets/ed0d0fd6-b138-4f21-ac30-d0b98f032a24)

![Screenshot 2025-02-16 113527](https://github.com/user-attachments/assets/8c4f30fe-a18b-4742-b63c-f45f3ee48407)

