# Folder structure

- **common**
  - **[components]** (all common functional code)
    - **[singleComponent]**;
    - component.js;
    - component.scss;
  - **[containers]** (all common containers(bigges than components))
- **pages**
  - **[ExamplePage]** (all you need to single screen)
  - **[components]**
  	- **[singleComponent]**
 	 	- component.js
  		- component.scss
 - index.js
 - clockPage.scss
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

# Desing system

<details><summary>Text</summary>
		 Header
		 <ul>
		 <li>size: '26px' </li>
		 <li>font: 'Roboto' </li>
		 <li>color: '#808080' </li>
		 <li>weight: '700' </li>
		 <li>style: 'normal' </li>
		 <li>letter-spacing: '0.02em' </li>
		 </ul>
		 Button
		 <ul>
		 <li>size: '26px' </li>
		 <li>font: 'Roboto' </li>
		 <li>color: '#808080' </li>
		 <li>weight: '700' </li>
		 <li>style: 'normal' </li>
		 <li>letter-spacing: '0.02em' </li>
		 </ul>
	     Checkbox
		 <ul>
		 <li>size: '18px' </li>
		 <li>font: 'Roboto' </li>
		 <li>color: '#4D4D4D' </li>
		 <li>weight: '400' </li>
		 <li>style: 'normal' </li>
		 <li>letter-spacing: '0.02em' </li>
		 </ul>
</details>

<details><summary>Color palette</summary>
		 Primary:
		 <ul>
		 <li> 100: '#EDEBFB' </li>
		 <li> 200: '#DBD7F7' </li>
		 <li> 300: '#C9C3F3' </li>
		 <li> 400: '#B8AFEF' </li>
		 <li> 500: '#A69CEB' </li>
		 <li> 600: '#9488E7' </li>
		 <li> 700: '#8374E3' </li>
		 <li> 800: '#7160DF' </li>
		 <li> 900: '#5F4CDB' </li>
		 <li> 1000: '#4E39D8' </li>
		</ul>
 		Accent:
		 <ul>
		 <li> 100: '#FFDA58' </li>
		 <li> 200: '#37DBFF' </li>
		 <li> 300: '#E791FE' </li>
		 </ul>
		 Gray:
		 <ul>
		 <li> 100: '#E5E5E5' </li>
		 <li> 200: '#CCCCCC' </li>
		 <li> 300: '#B3B3B3' </li>
		 <li> 400: '#999999' </li>
		 <li> 500: '#808080' </li>
		 <li> 600: '#4D4D4D' </li>
		 <li> 700: '#343434' </li>
		 <li> 800: '#1B1B1B' </li>
		 <li> 900: '#020202' </li>
		</ul>
		 White:
		 <ul>
		 <li> 100: '#FFFFFF' </li>
		 <li> 200: '#FDFDFE' </li>
		 <li> 300: '#F7F7FD' </li>
		 <li> 400: '#F4F3FC' </li>
		 <li> 500: '#F2F1FC' </li>
		 <li> 600: '#F0EFFB' </li>
		 <li> 700: '#EEEDFB' </li> 
		</ul>
</details>
<details><summary>Logo</summary>
		 Small:
		 <ul>
		 <li>size: '50px' </li>
		 <li>font: 'Roboto' </li>
		 <li>color: '#020202' </li>
		 <li>weight: 'bold' </li>
		 <li>style: 'normal' </li>
		 </ul>
		Big:
		 <ul>
		 <li>size: '120px' </li>
		 <li>font: 'Roboto' </li>
		 <li>color: '#020202' </li>
		 <li>weight: 'bold' </li>
		 <li>style: 'normal' </li>
		 </ul>
</details>
