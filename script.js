const correctans = ['A','B','A','A','B','B','A','B'];
const form = document.querySelector('.questions');
const result = document.querySelector('.result');
form.addEventListener('submit' , e =>{
    e.preventDefault();
    let score = 0;
    const userans = [form.q1.value, form.q2.value , form.q3.value , form.q4.value , form.q5.value , form.q6.value,form.q7.value,form.q8.value];
    //check ans
    userans.forEach((answer,index) =>{
        if(answer === correctans[index]){
            score += 12.5;
        }})
        scrollTo(top);
        result.setAttribute('style', 'display:contents;');

        let output = 0;
        const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output==score){
            clearInterval();
        }
        else{
            output++;
        }
     },10 )
})
