<?php

$n=11;

echo compte_multiple_sump($n);

function compte_multiple_sump($n)
{
    $result = 0;
    if($n>0 && $n<1000){
        
        for ($i=0; $i<$n; $i++) {
            if (($i%3 ===0 )||($i%5 ===0) || ($i%7 ===0)){
                $result = $result + $i;
            }   
        }
    }
   
    return $result;
}
?>