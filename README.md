# Vortex CRM - Lead Management System

A modern, lightweight Customer Relationship Management (CRM) application built with vanilla JavaScript and Tailwind CSS. Manage your leads efficiently with a clean, responsive interface.

## 🚀 Features

- **Lead Management**: Create, read, update, and delete lead records
- **Data Persistence**: Automatic local storage for offline capability
- **CSV Export**: Export all leads to CSV format with date-stamped filenames
- **Status Tracking**: Visual status indicators (Pending, Completed, Cancelled)
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Modal Interface**: Clean modal dialogs for editing leads
- **Form Validation**: Comprehensive input validation
- **Real-time Updates**: Instant UI updates without page refresh

## 📋 Lead Information Tracked

Each lead contains the following information:
- **Name**: Full name of the lead
- **Email**: Contact email address
- **Phone**: Phone number
- **Service**: Type of service requested
- **Source**: How the lead was acquired (Google, Referral, etc.)
- **Status**: Current status (Pending, Completed, Cancelled)
- **Date**: Date of lead creation/contact
- **Time**: Time of lead creation/contact
- **ID**: Unique identifier (auto-generated)

## 🛠️ Technologies Used

- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Storage**: Browser Local Storage
- **Icons**: Tailwind CSS utilities

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/Phoenix-Domain/vortex-crm.git
   cd vortex-crm
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Tailwind CSS**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

4. **Configure Tailwind** (if not already configured)
   
   Create `tailwind.config.js`:
   ```js
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

   Create `postcss.config.js`:
   ```js
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   }
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Usage

### Adding a New Lead
1. Fill in all required fields in the lead form
2. Select appropriate status from dropdown
3. Click "Submit" to add the lead
4. Lead will appear in the leads list immediately

### Editing a Lead
1. Click the "Edit" button on any lead card
2. Modal will open with pre-filled information
3. Modify the desired fields
4. Click "Update" to save changes

### Deleting a Lead
1. Click the "Delete" button on any lead card
2. Lead will be removed immediately
3. Data is automatically saved to local storage

### Exporting Data
1. Click the "Export" button
2. CSV file will download automatically
3. Filename format: `leads_YYYY-MM-DD.csv`
4. File includes all lead information

## 📁 Project Structure

```
vortex-crm/
├── src/
│   ├── js/
│   │   └── main.js          # Main application logic
│   └── css/
│       └── style.css        # Custom styles and Tailwind imports
├── index.html               # Main HTML file
├── package.json
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🏗️ Architecture

### Classes
- **MakeUser**: Constructor class for creating user/lead objects with unique IDs

### Key Functions
- `createList(user)`: Renders lead cards in the DOM
- `updateList(user)`: Updates existing lead in array and re-renders
- `exportDataToCSV(data)`: Exports lead data to CSV format
- `saveItem(item)`: Saves data to localStorage
- `getItem()`: Retrieves data from localStorage
- `clearInputs()`: Resets form fields

### Data Flow
1. User input → Form validation → MakeUser class → userArray
2. userArray → localStorage (persistence)
3. localStorage → DOM rendering (on page load)
4. userArray → CSV export (on demand)

## 🎨 Styling

The application uses Tailwind CSS with custom classes:
- `.btnPrimary`: Primary button styles
- `.btnSecondary`: Secondary button styles  
- `.formInput`: Form input field styles
- `.formUpdateInput`: Update form input styles
- Status colors: `text-yellow-500`, `text-green-500`, `text-red-500`

## 💾 Data Storage

- **Local Storage Key**: `'Client'`
- **Format**: JSON stringified array of user objects
- **Persistence**: Data survives browser sessions
- **Fallback**: Demo data loads if no existing data found

## 🔧 Configuration

### Environment Variables
No environment variables required - runs entirely client-side.

### Customization
- Modify status options in the HTML select dropdown
- Add new fields by updating the MakeUser class and form inputs
- Customize styling in `src/css/style.css`
- Adjust Tailwind configuration in `tailwind.config.js`

## 🐛 Known Issues

- Data is stored locally (not synced across devices)
- No user authentication system
- No data backup/restore functionality
- Limited to browser storage capacity

## 🚧 Future Enhancements

- [ ] User authentication system
- [ ] Cloud data synchronization
- [ ] Advanced filtering and search
- [ ] Data backup/restore
- [ ] Email integration
- [ ] Report generation
- [ ] Mobile app version
- [ ] Multi-user support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 Author

**Batubo Victory**
- Email: victorybatubo76@gmail.com
- GitHub: [@Phoenix-Domain](https://github.com/Phoenix-Domain)

## 🙏 Acknowledgments

- Tailwind CSS for the utility-first CSS framework
- Vite for the fast build tool
- JavaScript community for inspiration and best practices

---

**Built with zeal using Vanilla JavaScript and Tailwind CSS**