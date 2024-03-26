# html_block_extension
Written as a solution for ASU. This was designed to address an issue where the Optimizely Visual Editor was not allowing a button to be clicked as the editor was wrapping the button in a single <opty-data> change. In the interest of reusing the HTML block in various experiment's, I've created an Optimizely Extension that allows you to insert it as needed. 


**Steps to Implement**

1. Locate the **asu_mock_up_extension.json** file provided in this repo.
2. Copy the JSON file.
3. Visit Implementation -> Extensions (Tab) --> Create New Extension --> Using JSON
4. Paste the JSON in the field and save
5. In the Extensions menu, click the Three Dots associated with ASU Mock Up, and click Enable.

The Extension is now available in the Visual Editor panel for each experiment. 


**To Apply to An Experiment**
1. Visit the experiment in question
2. Select Create
3. Select the ASU Mock Up

![Screenshot 2024-03-26 at 2 42 01 PM](https://github.com/Koppinly/html_block_extension/assets/130506129/1942430f-8497-4eb6-825a-e041de31fcff)


**Make Changes**
1. If you'd like to make changes, there are several fields available that correspond with how the HTML is structured. If you take a look at the HTML below, you'll see that each {{}} placeholder syntax corresponds to a field in the visual editor menu. So, you can make changes to the fields to tailor the HTML to your needs.
![Screenshot 2024-03-26 at 2 43 31 PM](https://github.com/Koppinly/html_block_extension/assets/130506129/2f2c55ed-1db5-4096-a4e9-5d24fcea9265)


If you wish to alter the Extension, you can do so by changing the HTML, CSS, or Apply JS in the Extensions configuration. 

This extension is inserted as adjacent HTML as is dictated in the Apply JS for the experiment, which looks like this:

--Apply JS--
const utils = window.optimizely.get('utils');

utils.waitForElement('.confirm-details > .card-body')
.then(function(elem) {
  // Prepend the extension HTML to the selected element
  elem.insertAdjacentHTML('afterbegin', extension.$html);
});
