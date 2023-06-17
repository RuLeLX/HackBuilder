import './quest1.css'
import Image from './Img'

export default function Quest1() {
    let k = 0;
    let qs = ['Какой-то вопрос2','Какой-то вопрос3', 'Успешно!'];

    
    const quest = ()=>{
       let qst = document.getElementById('quest');
       qst.style.transition = '.3s';
       qst.style.opacity = '0';
       qst.style.marginLeft = '0%';
       qst.style.marginRight = '16%';
       
       setTimeout(()=>{
        qst.style.transition = '0s';
        qst.style.marginLeft = '16%';
        qst.style.opacity = '1';
        qst.textContent = qs[k];
        k++;
       }, 700)

       if (k === 2) {
        setInterval(()=>{
            document.getElementById('Image').hidden=false;
            document.getElementById('button_for_quests').textContent = 'Вернуться';
            document.getElementById('button_for_quests').onclick = ()=>{
                window.location.reload();
            }
        }, 300)
        
       } 
      
    }

    

    return <div className="m-5" Style="text-align: center;">
            <div id="Image" hidden>
                <Image />
            </div>

            <p id="quest">Что у вас произошло?</p>
            <textarea></textarea>
           

            <button id='button_for_quests' type="button" className="btn btn-primary d-flex" Style="margin: 0 auto" onClick={quest}>Отправить</button>

            <div className='num_pages'>
                <div className="rounded-circle pages"></div>
                <div id="numerate_quest"><div className="rounded-circle pages"></div><p>1</p></div>
                <div className="rounded-circle pages"></div>               
            </div>

        </div>
}