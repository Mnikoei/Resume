
var chatUrl = 'https://t.me/m_nikoei' ;
var conversation = [
    {contact:'Ok so intoduce yourself !!'},
    {author:"i'm mohsen nikoei"}
];

var header = document.getElementById('header');
var profile = document.getElementById('profile');
var nameStatus = document.getElementById('name-status'); 
var profileInfo = document.getElementById('profile-info'); 
var messageIcon = document.getElementById('message-icon'); 
var callIcon = document.getElementById('call-icon'); 
var arrowLeftIcon = document.getElementById('arrow-left-icon'); 
var inputMessage = document.getElementById('input-message');
var chatMessages = document.getElementById('chat-messages');

var EventController = {


    init : function(){
        
        this.initConversation();

        inputMessage.addEventListener('click' , function(){
           window.open( chatUrl , '_blank');
        });

        nameStatus.addEventListener('click' , function(e){
           EventController.toggleShowProfile(e)
        } , true);

        messageIcon.addEventListener('click' , function(e){
           window.open( chatUrl , '_blank');
        } , true);

        arrowLeftIcon.addEventListener('click' , function(e){
            
           if(arrowLeftIcon.hasAttribute('on-profile-info')) this.toggleShowProfile();

        }.bind(this) , true);

        callIcon.addEventListener('click' , function(){
            window.open('tel:+989917257355')
        });

        profile.addEventListener('click', function(){
            this.showProfilePic()
        }.bind(this));
  

    },
    initConversation:function(){

      conversation.forEach(function(message){

        Object.entries(message).forEach(function(message){
            var cssClass = message[0];
            var text = message[1];
            
            var domMessage = document.createElement('div');

            domMessage.append(text);
            domMessage.classList.add('chat-item' , cssClass + '-message');

            var d = document.createElement('small');
                    d.classList.add('message-time');

                    var time = new Date();

                    d.append(time.toLocaleString('en-IR', { hour: 'numeric', minute: 'numeric', hour12: true })) ;


             if(cssClass === 'author'){
                    d.innerHTML += '<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7C514.5,101.703,514.499,85.494,504.502,75.496z"/></g></svg>'
             }

             domMessage.append(d);
            chatMessages.appendChild(domMessage);
        });

        

      });

    },
    toggleShowProfile : function(e){
        
        header.classList.contains('expand-header')
        ? header.classList.remove('expand-header')
        : header.classList.add('expand-header'); 
        
        profile.classList.contains('change-position')
        ? profile.classList.remove('change-position')
        : profile.classList.add('change-position'); 

        profile.hasAttribute('on-profile-info')
        ? profile.removeAttribute('on-profile-info') 
        : profile.setAttribute('on-profile-info' , '')
        
        arrowLeftIcon.hasAttribute('on-profile-info')
        ? arrowLeftIcon.removeAttribute('on-profile-info') 
        : arrowLeftIcon.setAttribute('on-profile-info' , '')
        
      
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
  
        var profilePic = document.querySelector('#profile[on-profile-info]')
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