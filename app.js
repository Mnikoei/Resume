
var chatUrl = 'https://t.me/m_nikoei' ;

var header = document.getElementById('header');
var profile = document.getElementById('profile');
var nameStatus = document.getElementById('name-status'); 
var profileInfo = document.getElementById('profile-info'); 
var messageIcon = document.getElementById('message-icon'); 
var callIcon = document.getElementById('call-icon'); 
var arrowLeftIcon = document.getElementById('arrow-left-icon'); 

var EventController = {


    init : function(){
        
        var inputMessage = document.getElementById('input-message');

        inputMessage.addEventListener('click' , function(){
           window.open( chatUrl , '_blank');
        });

        var nameStatus = document.getElementById('name-status');

        nameStatus.addEventListener('click' , function(e){
           EventController.showProfile(e)
        } , true);

        messageIcon.addEventListener('click' , function(e){
           window.open( chatUrl , '_blank');
        } , true);

        arrowLeftIcon.addEventListener('click' , function(e){
           this.showProfile();
        }.bind(this) , true);

        callIcon.addEventListener('click' , function(){
            window.open('tel:+989917257355')
        });


        

    },
    showProfile : function(e){
        
        header.classList.contains('expand-header')
        ? header.classList.remove('expand-header')
        : header.classList.add('expand-header'); 
        
        profile.classList.contains('change-position')
        ? profile.classList.remove('change-position')
        : profile.classList.add('change-position'); 

        nameStatus.classList.contains('change-position')
        ? nameStatus.classList.remove('change-position')
        : nameStatus.classList.add('change-position');
        
        profileInfo.classList.contains('profile_info-change-position')
        ? profileInfo.classList.remove('profile_info-change-position')
        : profileInfo.classList.add('profile_info-change-position'); 
       
        messageIcon.classList.contains('message-icon-change-position')
        ? messageIcon.classList.remove('message-icon-change-position')
        : messageIcon.classList.add('message-icon-change-position'); 

        callIcon.classList.contains('call-icon-show-transition')
        ? callIcon.classList.remove('call-icon-show-transition')
        : callIcon.classList.add('call-icon-show-transition'); 

    }

}

EventController.init();