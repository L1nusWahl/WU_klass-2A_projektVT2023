I denna mapp lägger du filer som du använder i projektet men som inte syns på själva hemsidan, till exempel:
- Skisser
- PS-filer
- Bilder i storformat




@media screen and (min-width: 800px) {
    #burger {
        display: none;
    }

    #grid_wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 80px 80px 600px 850px 850px 200px ;
        grid-template-areas:
        "he he"
        "sh sh"
        "if if"
        "sp sp"
        "fo fo";
    }

    #nav-links {
        flex-direction: row;
        height: 80px;
        width: 100%;
        background-color:  rgb(148, 87, 87);
        position: absolute;
        top: 0px;
        right: 0px
    }

    .nav_active {
        transform: translateY(0px);
    }
}



#burger div {
    display: flex;
    height: 5px;
    width: 30px;
    background-color: black;
    margin: 5px;
    border-radius: 10px;
    transition: all 0.5s;
}

#nav-links {
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 200px;
    background-color: rgb(148, 87, 87);
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: -500px;
    right: 0px;
    transition: all 0.5s;
    grid-area: nl ;
}

#links {
    display: none;
}

#nav-links li{
    list-style: none;
}
#nav-links a{
   text-decoration: none;
   font-size: 1.25rem;
   letter-spacing: 0.1875rem;
   color: black;
   font-family: 'Courier New', Courier, monospace;
   font-weight: bold;
}

#burger {
    margin-right: 40px;
    cursor: pointer;
}

.burger_toggle #burger_line_2 {
    opacity: 0;
}

.burger_toggle #burger_line_1 {
    transform: rotate(-45deg) translate(-8px, 6px);  
}

.burger_toggle #burger_line_3 {
    transform: rotate(45deg) translate(-8px, -6px);
}

.nav_active {
    transform: translateY(580px);
}



<div id="burger" class="burger_toggle">
                <div id="burger_line_1"></div>
                <div id="burger_line_2"></div>
                <div id="burger_line_3"></div>
            </div>