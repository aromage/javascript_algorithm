const func = ({x,y,z}) => {
    console.log(x,y,z);
}

func({x:1, y:2, z:3}); //1 2 3

func({x:1, t:2, z:3}); // 1 undefined 3

func(1,2,3); // undefined undefined undefined
