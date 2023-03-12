import { createStore } from 'vuex';
import { Storage } from '@ionic/storage';

const ionicStorage = new Storage();
ionicStorage.create();

export const store = createStore({

    state() {
        
        return {
            
            messages: [{
                
                id: '0',
                text: 'Buenos días, ¿En que puedo ayudarte?',
                who: 'he'
            }]
        };
    },
    
    mutations: {
        
        addMessage(state, data) {
            
            const newMessage = {
                
                id: new Date().toISOString(),
                who: 'me',
                text: data
            };

            state.messages.push(newMessage);
            ionicStorage.set('autis',JSON.parse(JSON.stringify(state.messages)));
        }
    },
    
    actions: {
    
        addMessage(context, data) {
            
            context.commit('addMessage', data);
        }
    },
    
    getters: {

        messages(state) {

            ionicStorage.get('autis').then(storeValue => {
                
                if(storeValue != null){

                    for(let i=0;i<storeValue.length;i++) {
                        
                        if(state.messages.findIndex(a=>{return a.id == storeValue[i].id}) == -1) {

                            state.messages.push(storeValue[i]);
                        }
                    }
                }
            });

            return state.messages;
        }
    }
});