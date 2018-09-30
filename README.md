PLAN

initial categories
    animals -- 21
    common bonds -- 508
    rhyme time -- 561
    weights and measures -- 420
    nursery rhymes -- 37
    number, please -- 1195

initialize board(categoryNumberList, moneyIncrement) 
    assumes categoryNumberList is 6 cagetories.
    moneyIncrement can be default $200

    instantiate grid
        each column is associated with corresponding topic in categoryNumberList
        top row is category titles
        each subsequent row is rowNumber * moneyIncrement
    
    -- css -- :hover = highlight in some way.  Perhaps color border  

    gridCell onclick -- 
        if displaying dollar amount
            blank out text in cell (blank out the $ amount)
            create new styled div element (questionCell, does not inherit from gridCell)) above (z-index) the clicked grid cell,
            containing the question
            transition cell to full grid size (scale text as it grows) 
            display text box and submit button for player to attempt answer
            submit button onclick => shift text up, add divider text (------), and append solution text below
                    check submitted answer
                    display response to player -- are they getting points or not
                    change submit button to continue button
                    continut button onclick => return to main board.  
                        increment score

        *needed -- some sort of function to check for a finished game.
        *       -- alternation of players
        



    create model 
        Board is Array of 6 topic objects
            each topic has a title and a questions object
                questions object has 5 dollarAmount: question k:v pairs
                
