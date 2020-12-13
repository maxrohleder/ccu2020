# Api interface definition for backend-frontend interaction

We implement a two-stage hirarchic routing setup.

The first node will be one of these themes:

- Settings
- Forum
- Data

For each of these themes there will be a router and a controller in the backend handling all sub-topics and requests.

## Full routing table

### Settings

These routes allow the app to retrieve and store user settings like mail consent, home country etc.

- **GET** `/api/settings/<uid>`
  - response JSON AppSettings
- **POST** `/api/settings/set`
  - payload: JSON with AppSettings
  - response: 200 ok
- **GET** `/api/settings/checklist`
  - response: JSON ChecklistItem[]

### Forum

Contains routes to get and set posts in the forum. Mixture between user and global data.

- **GET** `/api/forum/all`
  - response: JSON ForumPosts[]

### Data

Used to retrieve global information displayed in the app. This includes country data, news, and notifications.

!!! Currently returns Portugal, Germany, France, Spain and USA. GER & POR with News !!!

- **GET** `/api/data/allCountries`
  - response: JSON {<Country>: CountryData}
- **GET** `/api/data/news`
  - response: JSON {<Country>: NewsData[]}
- **GET** `/api/data/alerts`
  - response: JSON NotificationData[]
