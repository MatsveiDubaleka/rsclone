const tokensArray: string[] = [
  'd11e71fe-35f6-4512-896d-d9880388525c',
  '7c38ea01-5532-4218-b760-e89055155e5a',
  '268e5c31-c58a-4bdb-b553-7bb959f052b3',
  '182fab2b-cb7a-4562-b6c0-fefa3b89590f',
  'c788be1c-9682-4896-bbe2-275683222b78',
  '5724b5bc-0be1-4cb9-a88e-710c097a9c01',
  'd11e71fe-35f6-4512-896d-d9880388525c',
  'f36bbe93-5681-4a31-a74f-f9f36450cdb7'
]

let tokenElement = 0;

if(localStorage.getItem("tokenElement")){
  tokenElement = Number(localStorage.getItem("tokenElement"));
}

if(localStorage.getItem("error")){
  if(tokenElement === 7){
    tokenElement = 0;
    localStorage.setItem("tokenElement", String(tokenElement));
  } else {
    tokenElement += 1;
    localStorage.setItem("tokenElement", String(tokenElement));
  }
  localStorage.removeItem("error");
}

console.log(`Api key #${tokenElement} of ${tokensArray.length}`);

export const token = tokensArray[tokenElement];

  // 'd11e71fe-35f6-4512-896d-d9880388525c'
  // '7c38ea01-5532-4218-b760-e89055155e5a'
  // '268e5c31-c58a-4bdb-b553-7bb959f052b3'
  // '182fab2b-cb7a-4562-b6c0-fefa3b89590f'
  // 'c788be1c-9682-4896-bbe2-275683222b78'
  // '5724b5bc-0be1-4cb9-a88e-710c097a9c01'
  // 'd11e71fe-35f6-4512-896d-d9880388525c'
  // 'f36bbe93-5681-4a31-a74f-f9f36450cdb7'
  