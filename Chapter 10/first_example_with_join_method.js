//This is the first examples with the Join method

//Lets take the strings which is separates with comas and changed with '-'
['Rafael','Alejandro','@rgarduno'].join('-');
// => Rafael-Alejandro-@rgarduno

//now let's changed as the way it was
['Rafael','Alejandro','@rgarduno'].join();
// => Rafael,Alejandro,@rgarduno

//but what if I need all without spaces
['Rafael','Alejandro','@rgarduno'].join('');
// => "RafaelAlejandro@rgarduno"
