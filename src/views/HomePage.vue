<template>
    <ion-page>

        <ion-header>
            
            <ion-toolbar>

                <ion-buttons slot="start">

                    <ion-button size="large" @click="back">

                        <ion-icon :icon="arrowBackOutline"></ion-icon>

                    </ion-button>

                </ion-buttons>

            </ion-toolbar>
          
        </ion-header>
        
        <ion-content ref="chatContent" :fullscreen="true">

            <ion-list>
            
                <ion-item v-for="message in messages" :key="message.id" :class="{'he':message.who == 'he'}">
                    
                     <div class="name" v-if="message.who == 'me'">
                         
                         Salva
                         
                    </div>
                    
                    <div class="message">
                        
                        {{message.text}}
                    
                    </div>
                  
                     <div class="name" v-if="message.who == 'he'">
                         
                         Alberto
                         
                    </div>
                  
                </ion-item>
              
            </ion-list>

        </ion-content>
        
        <ion-footer>
            
            <ion-toolbar>

                <ion-input ref="textInput" @keypress="send" placeholder="Escribe un mensaje ..."></ion-input>
    
                <ion-buttons slot="end">

                    <ion-button size="large" @click="send">

                        <ion-icon :icon="sendOutline"></ion-icon>

                    </ion-button>

                </ion-buttons>
                
            </ion-toolbar>

        </ion-footer>
        
    </ion-page>
</template>


<script setup lang="ts">
    
    import { onIonViewDidEnter, IonContent, IonPage, IonButton, IonHeader, IonToolbar, IonButtons, IonIcon, IonFooter, IonInput, IonList, IonItem } from '@ionic/vue';
    import { arrowBackOutline, sendOutline } from 'ionicons/icons';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import { ref } from 'vue';
    
    const router = useRouter();
    const store = useStore();
    const textInput = ref();
    const chatContent = ref();
    
    const messages = store.getters.messages;
    
    const back = () => {
        
        router.back();
    }
    
    const send = (e) => {
        
        if(((e.key == "Enter" && e.type == 'keypress') || (e.type != 'keypress'))  && textInput.value.$el.value != "") {
                
            store.dispatch('addMessage',textInput.value.$el.value);
            
            setTimeout(()=>{chatContent.value.$el.scrollToBottom(0)},1);
            textInput.value.$el.value = "";
        }
    }
    
    onIonViewDidEnter(() => {
    
        chatContent.value.$el.scrollToBottom(0);
    });
    
</script>

<style scoped>

    ion-toolbar {
        
        --background: #3880ff;
    }
    
    ion-input {
        
        --placeholder-color: #ffffff;
        --color: #ffffff;
    }
    
    #container {
        
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    
    ion-button {
        
        margin-left:10%;
        margin-top:10%;
        width: 80%;
    }
    
    ion-item {
        
        --border-color: transparent;
    }
    
    ion-item .message {
        
        border-radius: 12px;
        background: #ececec;
        margin: 2px 20px 2px 20px;
        padding: 14px;
    }
    
    ion-item.he .message {
        
        background: #3880ff;
        color: white;
    }
    
    ion-item .name {
        
        margin-left: auto;
        color: grey;
    }
    
    ion-item.he .name {
        
        margin-right: auto;
        margin-left: 0px;
    }

</style>
