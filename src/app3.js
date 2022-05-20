import './app3.css'
import $ from 'jquery'

const $square = $('#app3 .square')

$square.on('click', ()=>{
    $square.toggleClass('active')   // toggleClass: 如果有这个类就删掉，没有就加上
  })