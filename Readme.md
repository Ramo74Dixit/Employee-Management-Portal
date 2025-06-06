Javascript DOM Complete Lecture Breakdown

1.What is DOM
2.What is nodes and type of nodes
3.Selecting elements using DOM
   a.getElementById()
   b.getElementByName()
   c.getElementByTagName()
   d.getElementByClassName()
   e.querySelector() and querySelctoreAll()
   -> query selector is used for selecting first occuring element whether
       queryselectorall is used for selecting all elements of a query.

       

4. Traversing elements
   a. selecting parent element
   b. selecting child element
   c. selecting sibling elements

5. Manipulating HTML elements

  a. createElement()
  b. appendChild()
  c. textContent
  d. innerHtml
  e. after()
  f. append()
  g. prepend()
  h. insertAdjacentHTML()
  e. replaceChild()
  f. cloneNode()
  g. removeChild()
  h. insertBefore()

6. Attribute Methods
    
    a. getAttribute()
    b. setAttribute()
    c. hasAttribute()
    d. removeAttribute()

7. Manipulating Elements's Styles
   
   a. style property
   b. cssText
   c. getComputedStyle()
   d. className property
   e. classList property

8. Javascript Events 

  a. what is event
  b. event bubbling & event capturing
  c. event handler in html attributes
  d. dom level 0 event handlers
  e. addEventListener
  f. removeEventListener
  g. Event Objects
  h. Different Types of Event
  //

  1. onClick -> jab hme html me direct attribute ke through ek event ko bind krna hota hai .
  2. Dom level event handler -> js me hm jab directly event bind krenge using .onclick .onmouseover etc. 
  3. RemoveEventListener -> jo event abhi aapne addEventListener() ki help se add kiya h usse remove krne ke liye use krte hai . Important -> Remove krne ke liye hme named function ki need hoti hai .
