function solution(bridge_length, weight, truck_weights) {
 
    let time = 1;
    let current_weight = 0;
    let current_trucks = [];
    
    while(truck_weights.length || current_trucks.length) {
        if(current_trucks.length){
            if(current_trucks[0].remain_time == time){
                current_weight -= current_trucks[0].weight;
                current_trucks.shift();
            }
        }
        if(truck_weights.length 
           && (current_weight + truck_weights[0] <= weight)
          ){
            current_trucks.push({
                remain_time : time + bridge_length,
                weight : truck_weights[0],
            })
            current_weight += truck_weights[0];
            truck_weights.shift();
            time++;
        } else if(current_trucks.length){
            time= current_trucks[0].remain_time;
        }
    } 
        
    return time;
}