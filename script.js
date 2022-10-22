'use strict';


//Elementleri Seçmek
const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")
const score0El = document.querySelector("#score--0")
const score1El = document.getElementById("score--1") //# eklenmez
const current0El = document.getElementById("current--0") //# olmadan yazılır ByID
const current1El = document.getElementById("current--1") //# olmadan yazılır ByID
const diceEl = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

//Başlangıç Koşulları
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add("hidden")

// const scores = [0,0] // 1 numaralı oyuncu 0 konumda,2 numaralı oyuncu 1 konumunda 
// let currentScore = 0  //güncel puan , func içinde değişecek
// let activePlayer = 0 //1 numaralı oyuncu -->0 arrayde saklıycaz ondan 0
// let playing = true
let scores,currentScore,activePlayer,playing

const init = function () {

    scores = [0,0] 
    currentScore = 0  
    activePlayer = 0 
    playing = true
    
    score0El.textContent = 0
    score1El.textContent = 0
    current0El.textContent = 0
    current1El.textContent = 0
    
    diceEl.classList.add("hidden")
    player0El.classList.remove("player--winner")
    player1El.classList.remove("player--winner")
    player0El.classList.add("player--active")
    player1El.classList.remove("player--active")

}
init()
const switchPlayer = function () {
        document.getElementById(`current--${activePlayer}`).textContent = 0 //sıfırladık
        activePlayer = activePlayer === 0 ? 1 : 0 // oyuncu değişikliğini sağladık
        currentScore = 0
        player0El.classList.toggle("player--active") //player active classı varsa kaldır,yoksa ekle
        player1El.classList.toggle("player--active")
}
//Zar Atma İşlevi

btnRoll.addEventListener("click", function () {
    if (playing) {
    // 1.Rastgele zar oluştur
    const dice = Math.trunc(Math.random() * 6) + 1
    //2.Zarları Göster
    diceEl.classList.remove("hidden")
    diceEl.src = `dice-${dice}.png`
    //3. Zarda 1 kontrol et.Eğer doğruysa diğer oyuncuya geç.
   

    //Zarda 1 i kontrol et
    if (dice !== 1) {
        //Zarı mevcut skora ekle
        currentScore += dice //currentScore = currentScore + dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore //ıd dinamik olarak değiştiriliyor
        // current0El.textContent = currentScore // Sonra değiştir 
    } else {
        //Eğer doğruysa diğer oyuncuya geç
        switchPlayer()
        }
    }
})

btnHold.addEventListener("click", function () {
    if (playing) {
    //1.Aktif oyuncunun toplam puanına mevcut puanı eklemek
    scores[activePlayer] += currentScore
    //scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer] 
    //2.Puanın en az 100 olduğunun kontrolü
    if (scores[activePlayer] >= 100) {
        //Oyunu bitir
        playing = false 
        diceEl.classList.add("hidden")
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.add("player--winner")
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove("player--active")
    } else {
            switchPlayer()
        }
    //100 ise Oyunu bitir
    //100 değilse diğer oynuncuya geç
    }
})

btnNew.addEventListener("click", init)

//rengi düzenle eksik**



























