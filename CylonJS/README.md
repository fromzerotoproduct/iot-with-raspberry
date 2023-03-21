In questo codice, prima di tutto importiamo la libreria Johnny-Five e la modalità di I/O specifica per Raspberry Pi (RaspiIO). Quindi, creiamo un nuovo oggetto Board, specificando la modalità di I/O come parametro.

All'interno della funzione ready, creiamo due oggetti Led per i pin 12 e 13 e li salviamo nelle variabili led1 e led2.

Infine, utilizziamo il metodo loop() di Johnny-Five per far lampeggiare i due LED alternativamente. Il metodo loop() esegue la funzione callback passata ogni 500 millisecondi. All'interno della funzione callback, chiamiamo il metodo toggle() su entrambi gli oggetti Led per alternare lo stato dei LED.