Week 2 exercises
Restaurant menu Part 2: styling with CSS
We will continue from last weeks assignment. Now that we have some structure for the restaurant menu and comments, it should be somehow modified so that it doesn't so badly look like it's from the 90's. Also, we will add a feature that makes it possible for users to rate the restaurant.

Requirements and Scoring

1. CSS classes, ids and tags
   Let's start by using different kinds of selectors. Body element should use font-family "Garamond". The table and review sections should have titles. To do these, add a header element (h2 for instance) with text "Menu" before the table, and add a header element before the review section with text "Reviews". These headers should have a class "header", and that class should change the font style to italic. Give the table an id menu-table , and use that id to align text to left.

2. Table with advanced CSS
   Add CSS styles to make the page better looking. Give to the table id menu-table background color "f2f2f2". Give the even rows of the table "gainsboro" as a background color. Table headers should also differ from other rows. Table headers should have some different color than "f2f2f2" or "gainsboro". Also, should have a little bit more top and bottom padding. The padding should be more than 1px.

3. Div usage
   Add div (div) element after (body), all other elements should be inside it. Give the div an class menu-layout. Center all contents of this div (using its class) by using text-align, max-width & margin. Set the maximum width of the div to 740px, and use "auto" in the margins. This way, if the display is wider than the maximum width of the element, the auto-margin will set margin same size on the left and right, centering the content. Set the table's width (using its id) to 100%, so the table will use all the width that is available.

4. List and selectors
   Let's make it possible for users to rate the restaurant. Add select (select) tag to the html. This should have an options to rate the restaurant. Select should have values 1-4, but the text inserted is up to you (for example, you can use stars). When user submits the review (including the rating and the comment text), it should be added as a (div) -element with a class comment, that has two child elements. The first element has a class comment-rating, and its text should be the same that is in the (select). The other one should have a class comment-text and the content of this element should be the text that is written in the (textarea).

5. Removing only one comment
   Currently, the comment removal button deletes all comments. This type of moderation is simple, yet not the best one to be honest. Change this functionality so that after clicking on the remove button, the user gets to access the comments in "editor mode". Each comment should then have a button with an class remove-comment next to them. By pressing the button, that comment should be removed. In other words, the comment-element should now consist of three elements instead of two, and pressing the button removes this whole element.

Note: You can either add the button to the element when the remove -button is pressed, or the button can already be inside the element, and pressing the remove -button only changes the visibility of the comment removal-button.
