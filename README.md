# Angular Form user Test

### Frontend

Angular + Boottrap

#### User Information Form

1. USER INFORMATION
   - USERNAME
   - NICKNAME
   - FIRSTNAME
   - LASTNAME
   - POSITION
   - NATIONALITY
   - TELEPHONE
   - STARTING DATE
2. CONTACT INFORMATION
   - ADDRESS
   - SUB DISTRUCT
   - DISTRICT
   - PROVINCE
   - POSTAL CODE
   - FACEBOOK
   - LINE ID
   - INSTAGRAM
3. EDUCATION INFORMATION ( Not Finshed )
4. EXPERIENCE INFORMATION ( Not Finshed )
5. SKILL INFORMATION ( Not worked)
6. INTERESTED INFORMATION ( Dummy )
7. GUILD INFORMATION ( Dummy )

### Backend

NodeJS + ExpressJS + MongoDB

#### initial after clone project

1. cd node-backend
2. npm i
3. npm run dev (nodemon index.js)

#### api List

1. post(/users) use to make new user data

2. get(/users) use to call all user data

3. get(/users/:id) use to call user data by id

4. put('/users/:id') use to update user data by id

5. delete('/users/:id) use to delete user data by id

#### Model of data

- username
- firstname
- Surname
- nickname
- position
- natonality
- telephone
- startingDate
- picture
- coverPhoto
- address
- subDistrict
- district
- province
- postalcode
- fackbook
- lineId
- instagram
- education
  - year
  - universityName
- experience
  - position
  - company
  - startDate
  - endDate
- skills
  - name
  - level
- interests
- guilds
