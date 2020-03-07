
var chatUrl = 'https://t.me/m_nikoei' ;

var header = document.getElementById('header');
var profile = document.getElementById('profile');
var nameStatus = document.getElementById('name-status'); 
var profileInfo = document.getElementById('profile-info'); 
var messageIcon = document.getElementById('message-icon'); 
var callIcon = document.getElementById('call-icon'); 
var arrowLeftIcon = document.getElementById('arrow-left-icon'); 
var inputMessage = document.getElementById('input-message');

var EventController = {


    init : function(){
        

        inputMessage.addEventListener('click' , function(){
           window.open( chatUrl , '_blank');
        });

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

        profile.addEventListener('click', function(){
            this.showProfilePic()
        }.bind(this));
  

    },
    showProfile : function(e){
        
        header.classList.contains('expand-header')
        ? header.classList.remove('expand-header')
        : header.classList.add('expand-header'); 
        
        profile.classList.contains('change-position')
        ? profile.classList.remove('change-position')
        : profile.classList.add('change-position'); 

        profile.hasAttribute('on-profile-info')
        ? profile.removeAttribute('on-profile-info') 
        : profile.setAttribute('on-profile-info' , '')
        
      
        nameStatus.classList.contains('change-position')
        ? nameStatus.classList.remove('change-position')
        : nameStatus.classList.add('change-position');
        
        profileInfo.classList.contains('profile-info-change-position')
        ? profileInfo.classList.remove('profile-info-change-position')
        : profileInfo.classList.add('profile-info-change-position'); 
       
        messageIcon.classList.contains('message-icon-change-position')
        ? messageIcon.classList.remove('message-icon-change-position')
        : messageIcon.classList.add('message-icon-change-position'); 

        callIcon.classList.contains('call-icon-show-transition')
        ? callIcon.classList.remove('call-icon-show-transition')
        : callIcon.classList.add('call-icon-show-transition'); 

    },
    showProfilePic : function(){
  
        var profilePic = document.querySelector('[on-profile-info]')
        if(!profilePic) return;
        
        if(!!profilePic && profilePic.classList.contains('profile-increase-scale')){
            profileInfo.classList.remove('profile-info-change-position-for-profile-pic');
            profile.classList.remove('profile-increase-scale');
            nameStatus.classList.remove('d-none');
            callIcon.classList.remove('d-none');
            messageIcon.classList.remove('d-none');
            
        }else{
            profileInfo.classList.add('profile-info-change-position-for-profile-pic');
            profile.classList.add('profile-increase-scale');
            nameStatus.classList.add('d-none');
            callIcon.classList.add('d-none');
            messageIcon.classList.add('d-none');
        }
        
    }

}

EventController.init();