import icons from 'url:../../img/icons.svg';
import View from './View.js';
class AddRecipeView extends View{
    _parentElement=document.querySelector('.upload');
    _message='Recipe was successfully uploaded';
    _window=document.querySelector('.add-recipe-window');
    _overlay=document.querySelector('.overlay');
    _btnOpen=document.querySelector('.nav__btn--add-recipe');
    _btnClose=document.querySelector('.btn--close-modal');

    constructor()
    {
        super();
        this.addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    toggleWindow()
    {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }
    addHandlerShowWindow()
    {
        this._btnOpen.addEventListener('click',this.toggleWindow.bind(this));
    }

    _addHandlerHideWindow()
    {
        this._btnClose.addEventListener('click',this.toggleWindow.bind(this));
        this._overlay.addEventListener('click',this.toggleWindow.bind(this));
    }

    addHandlerUpload(handler)
    {
        this._parentElement.addEventListener('submit',function(e)
        {
            e.preventDefault();
            const dataArr=[...new FormData(this)];//gives an array
            const data=Object.fromEntries(dataArr);//convert array to objects
            // console.log(data);
            handler(data);
        })
    }
    _generateMarkup()
    {

    }
}

export default new AddRecipeView();