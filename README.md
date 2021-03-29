# Folder structure
- **common**
	- **[components]** (all common functional code)
		 -  **[singleComponent]**;
		-  component.js;
		- component.scss;
	- **[containers]** (all common containers(bigges than components))
- **pages**
	- **[ClockPage]** (all you need to single screen)
        - **[components]**;
			 -  **[singleComponent]**;
			 	-   component.js;
				 -  component.scss;
		- index.js
		- clockPage.scss
	- **[HomePage]** (all you need to single screen)
        - **[components]**;
			 -  **[singleComponent]**;
			 	-   component.js;
				 -  component.scss;
		- index.js
		- homePage.scss
	- **[TaskPage]** (all you need to single screen)
        - **[components]**;
			 -  **[singleComponent]**;
			 	-   component.js;
				 -  component.scss;
		- index.js
		 taskPage.scss
	- **[SettingsPage]** (all you need to single screen)
        - **[components]**;
			 -  **[singleComponent]**;
			 	-   component.js;
				 -  component.scss;
		- index.js
		settingsPage.scss
- **state**
	- **[tasks]** (actions and reducers for tasks)
		- tasksActions.js
		- tasksReducer.js
	- **[user]** (actions and reducers for manage user state)
		- userActions.js
		- userReducer.js
- **assets**(images etc.)
- index.js
- app.js

#Desing system
<details><summary>Headers</summary>
		 - **h1**:
		 <ul>
		 <li>36px; </li>
		  <li>color; </li>
		 <li>margin; </li>
		  <li>etc; </li>
</ul>
		 - **h2**
		 <ul>
		 <li>0.8*h1; </li>
		  <li>color; </li>
		 <li>margin; </li>
		  <li>etc; </li>
</ul>
		 - **etc** - ...
</details>

<details><summary>Paragraphs</summary>
		 - **text**:
		 <ul>
		 <li>36px; </li>
		  <li>color; </li>
		 <li>margin; </li>
		  <li>etc; </li>
</ul>
</details>

<details><summary>Hex</summary>
		 - **Element**:
		 <ul>
		 <li>Color </li>
</ul>
</details>
