export const createDial = (id) => {
    return `
        <div class="dial-group dial-group--${id}" data-id='${id}'>
            <div class="dial-tracker__wrapper">
                <input type="text" value="2" class="dial-tracker dial-tracker--${id}" data-id='${id}' data-context=false>
            </div>
            <div class="dial-clock__wrapper">
                <div class="dial__crown"></div>
                <div class="dial__hand"></div>

                <div class="dial__context">
                    <div class="dial__context-section dial__context-section--1">
                        <div class="dial__line dial__line--1"></div>
                        <div class="dial__text dial__text--1c"></div>                                
                    </div>
                    <div class="dial__context-section dial__context-section--2">
                        <div class="dial__context--wrapper dial__context--wrapper--1">
                            <div class="dial__line dial__line--0"></div>
                            <div class="dial__text dial__text--0c"></div>                                     
                        </div>
                        <div class="dial__context--wrapper dial__context--wrapper--2 dial__context--wrapper">
                            <div class="dial__text dial__text--2c"></div>                   
                            <div class="dial__line dial__line--2"></div>
                        </div>
                    </div>
                    <div class="dial__context-section dial__context-section--3">
                        <div class="dial__text dial__text--4">
                            TEST
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    `;  
}

export const createLikert = (id) => {
    return `
        <div class="likert__container likert__container--${id}">
            <svg class="likert__line--group"> 
                <line class="likert__line" x1='0' x2='800' y1='50' y2='50'></line>                             
            </svg>
            <form action="#" class="likert__form likert__form--${id}" data-id='${id}'>
            </form>
        </div>
    `;  
}

export const createCheckbox = (id) => {
    return `
        <div class="checkbox__container checkbox__container--${id}">
            <form action="#" class='checkbox__form checkbox__form--${id}' data-id='${id}'>
                
            </form>
        </div>
    `
}

export const createVertfc = (id) => {
    return `
        <div class="vertfc__container vertfc__container--${id}">
            <form action="#" class="vertfc__form vertfc__form--${id}" data-id="${id}">
                
            </form>
        </div>  
    `;    
}

export const createSlider = (id) => {
    return `
        <div class="slider__container slider__container--${id}">
            <form action="#" class='slider__form slider__form--${id}' data-id='${id}'>

            </form>
        </div>
    `;    
}

