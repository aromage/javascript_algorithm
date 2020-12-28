const teams = [
    { name: 'Team 1', members: ['Paul', 'Lisa'] },
    { name: 'Team 2', members: ['Laura', 'Tim'] }
  ];
  
  function* getMembers(members) {
    for (let i = 0; i < members.length; i++) {
      yield members[i];
    }
  }
  
  function* getTeams(teams) {
    for (let i = 0; i < teams.length; i++) {
      // ✨ SOMETHING IS MISSING HERE ✨
      yield* getMembers(teams[i].members);
    }
  }

  function* getTeams2(teams) {
    for (let i = 0; i < teams.length; i++) {
      // ✨ SOMETHING IS MISSING HERE ✨
      yield getMembers(teams[i].members);
    }
  }
  
  const obj = getTeams(teams);
  console.log(obj.next()); // { value: 'Paul', done: false }
  console.log(obj.next()); // { value: 'Lisa', done: false }

  const obj2 = getTeams2(teams);
  const first = obj2.next(); // { value: Object [Generator] {}, done: false }
  console.log(first.value.next()); // { value: 'Paul', done: false }
  console.log(first.value.next()); // { value: 'Lisa', done: false }
  const second = obj2.next();
  console.log(second.value.next()); // { value: 'Laura', done: false }
  console.log(second.value.next()); // { value: 'Tim', done: false }
  
  function* gen() {
    // On the first iteration, yield does not return anything.
    //because it returns something ONLY when execution is resumed
    yield 1
    yield 2
    yield 3
    let b = yield 4;
    yield b; 
  }
  const g = gen();
  console.log(g.next());
  console.log(g.next());
  console.log(g.next());
  console.log(g.next());
  console.log(g.next(10)); //이전 yield값 치환