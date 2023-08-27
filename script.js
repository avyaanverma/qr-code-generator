// in this the code is written for  api 

const inputBox = document.querySelector('input');
const qr_image = document.querySelector('img')

inputBox.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter'){
        if(inputBox.value.trim() == ''){
            alert('Please write something')
        }
        else{
            const message = inputBox.value 
            if(message.length > 0){
                qr_image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${message}`
            }
            else{
                alert('Please enter something')
            }

        }

    }
})












  




