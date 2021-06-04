function dealclick()
{
    ucards=[randomc(),randomc()]
    dcards=[randomc(),randomc()]
    document.getElementById("ucards").textContent = "Your cards = " + ucards[0] +" , " + ucards[1] 
    document.getElementById("dcards").textContent = "Dealer's cards = " + dcards[0] + " , ? "
    sumc=ucards[1]+ucards[0]
    sumd=dcards[1]+dcards[0]    
    check1()
}

function randomc(){
    randomn=Math.floor(Math.random()*13)+1
    if (randomn===1){
        return 11
    }
    else if (randomn>10)
    {
        return 10
    }
    else{
        return randomn
    }
}

function check1()
{
    let message=""
    if(sumc<21)
    {
        message="Do you want more cards?"
    }
    else if(sumc===21)
    {
        message="Blackjack!"
    }
    else
    {
        message="Bust!"
    }
    document.getElementById("message").textContent = message
}


function hit()
{    if(sumc>21)
    {
        document.getElementById("message").textContent = "You Lost! Deal new cards"
    }
    else if(sumc===21){
        document.getElementById("message").textContent = "You've got Blackjack! Click stand"
    }
    else{
        hitn=randomc()
        if(hitn===11)
        {
            if(sumc+hitn>21)
            {
                ucards.push(1)
                sumc=0
                for(i=0;i<ucards.length;i++)
                    sumc += ucards[i]
                document.getElementById("ucards").textContent ="Your cards = "
                for(i=0;i<ucards.length;i++)
                document.getElementById("ucards").textContent += ucards[i] + " , "
                check1()
            }
            else{
                ucards.push(hitn)
                sumc=0
                for(i=0;i<ucards.length;i++)
                    sumc += ucards[i]
                document.getElementById("ucards").textContent ="Your cards = "
                for(i=0;i<ucards.length;i++)
                document.getElementById("ucards").textContent += ucards[i] + " , "
                check1()    
            }
        }
        else{
            ucards.push(hitn)
            sumc=0
            for(i=0;i<ucards.length;i++)
            sumc += ucards[i]
            document.getElementById("ucards").textContent ="Your cards = "
            for(i=0;i<ucards.length;i++)
            document.getElementById("ucards").textContent += ucards[i] + " , "
            check1()
        }
    }
}

function stand()
{
    if(sumc>21)
    {
        document.getElementById("message").textContent = "You Lost! Deal new cards"
    }
    else{
        document.getElementById("dcards").textContent ="Dealer's card = "
        for(i=0;i<dcards.length;i++)
        document.getElementById("dcards").textContent += dcards[i]+ " , "
        while(sumd<17)
            {
                if(sumd>sumc)
                {
                    break
                }
                else{
                    dhit=randomc()
                    if(dhit===11)
                    {
                        if(sumd+dhit>21)
                        {
                            dcards.push(1)
                            sumd=0
                            for(i=0;i<dcards.length;i++)
                                sumd += dcards[i]
                            document.getElementById("dcards").textContent = "Dealer's card = "
                            for(i=0;i<dcards.length;i++)
                            document.getElementById("dcards").textContent += dcards[i]+ " , "
                        }
                        else{
                            dcards.push(dhit)
                            sumd=0
                            for(i=0;i<dcards.length;i++)
                                sumd += dcards[i]
                            document.getElementById("dcards").textContent = "Dealer's card = "
                            for(i=0;i<dcards.length;i++)
                            document.getElementById("dcards").textContent += dcards[i]+ " , "
                        }
                    }
                    else{
                        dcards.push(dhit)
                        sumd=0
                        for(i=0;i<dcards.length;i++)
                        sumd += dcards[i]
                        document.getElementById("dcards").textContent = "Dealer's card = "
                        for(i=0;i<dcards.length;i++)
                        document.getElementById("dcards").textContent += dcards[i]+ " , "
                    }
                }
            }
        check2()
    }
}

function check2(){
    if(sumd<22){
        if(sumd>sumc)
        {
            message = " You Lost!"
        }
        else if(sumc>sumd)
        {
            message = " You Won! "
        }
        else
        {
           message = " Draw!"
        }
    }
    else
    {
        message = " You Won!"
    }
    document.getElementById("message").textContent = message
}