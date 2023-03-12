<template>
    <ion-page>

        <ion-content :fullscreen="true">

            <div id="container">

                <img src = '../assets/logo.png'>
                
                <ion-button @click="goToHome" type="submit" expand="block">Empezar</ion-button>

            </div>

        </ion-content>

    </ion-page>
</template>

<script setup lang="ts">

    import { IonContent, IonPage, IonButton } from '@ionic/vue';
    import { useRouter } from 'vue-router';
    
    const router = useRouter();
    
    const goToHome = () => {
        
        router.push('/home');
    }

</script>

<style scoped>

    #container {
        
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    
    ion-content {
        
        --overflow: hidden;
    }
    
    ion-button {
        
        margin-left:10%;
        margin-top:10%;
        width: 80%;
    }
    
</style>
