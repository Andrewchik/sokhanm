// https://api.telegram.org/bot1425750862:AAEVpcJ4seOtCzWcnHkdHBgTa8aLaRSEZ3c/getUpdates

// https://api.telegram.org/bot1425750862:AAEVpcJ4seOtCzWcnHkdHBgTa8aLaRSEZ3c/sendMessage?chat_id=382712023&text=hi_i_am_a_bot

// https://api.telegram.org/bot1425750862:AAEVpcJ4seOtCzWcnHkdHBgTa8aLaRSEZ3c/getUpdates



document.querySelector('#sendMessage').onclick = function() {
    let email = document.querySelector('#addEmail').value
    let message = document.querySelector('#addMessage').value
    




    if(email === '' || message === ''){
        alert('Заповніть всі поля!')
        
    }else{
        let shablonMessage = 'Повідомлення з сайту:                                                                                          Email: '+ email +'                                                                                        '
        const token = '1425750862:AAEVpcJ4seOtCzWcnHkdHBgTa8aLaRSEZ3c'
        chat_id='-1001168723591'
        // chat_id='382712023'
        let url = 'https://api.telegram.org/bot'+ token +'/sendMessage?chat_id='+ chat_id +'&text='+ shablonMessage +''
        let xhttp = new XMLHttpRequest()
        xhttp.open("GET", url+message, true)
        xhttp.send()
        document.querySelector('#addEmail').value = ''
        document.querySelector('#addMessage').value = ''
        alert('Повідомлення відправлено успішно!') 
    }
    
}


  
    
    


