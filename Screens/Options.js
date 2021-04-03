/* eslint-disable react/jsx-indent */

import React from 'react';
import { ScrollView, StyleSheet,Text,View,Linking,Alert } from 'react-native';


import colors from '../colors';
import { RowItem, RowSeparator } from '../RowItem';

const openURL = (url) =>{
Linking.openURL(url).catch(() => {
  Alert.Alert.alert('A intervenito eoare','Mai incearca');
});
}



const suma = "while(n!=0){ c=n%10; s=s+c; n=n/10;}";
const styles = StyleSheet.create({
    
    separator:{
        backgroundColor: colors.border,
        height: StyleSheet.heairlineWidth
        
        
    },
    safe:{
       
        
        padding:50,
        

    },
    head:{
        backgroundColor: "#4A90E2",
        color:"white",
        paddingTop: "30%",
        paddingBottom: "10%",
        textAlign: "center",
        fontWeight: "bold",
        width: "100%",
        fontSize: 30
    }
    
});
export default () => {
    return (
      <View>
      <View>
        <Text style={styles.head}>ALGORITMI ELEMENTARI</Text>
      </View>
      
      <ScrollView style={styles.safe}>
        
        <RowItem
          text="Suma cifrelor lui n"
          onPress={() => Alert.alert("rezultat", suma)}
          rightIcon="chevron-right"
          
        />
        
        <RowSeparator />
        
        <RowItem 
          text="Numarul de cifre ale lui n"
          onPress={() => Alert.alert("rezultat","d=2; ok=1; while(d<=n/2&&ok==1) if(n%d==0) ok=0; else d++; if(ok==1) cout<<“Prim”; else cout<<“Nu”;")}
          rightIcon="chevron-right"
          
        />
        <RowSeparator />
        <RowItem 
          text="Descompunerea in factori primi"
          onPress={() => Alert.alert("rezultat", "int a,d,p; cout<<“=a”; cin>>a; d=2; while(a>1) { p=0; while(a%d==0) { p=p+1; a=a/d; } if(p) // <=> if(p!=0) cout<<d<<“^”<<p<<” “; d++; }")}
          rightIcon="chevron-right"
          
        />
        <RowItem
          text="Multimea divizorilor lui n"
          onPress={() => Alert.alert("rezultat","d=2; while(d<=n/2) { if(n%d==0) cout<<d<<” “; // afisez divizorii proprii ai lui n, care se pot gasi in [2,n/2] d++;")}
          rightIcon="chevron-right"
          
        />
        <RowItem
          text="CMMDC a 2 nr a si b"
          onPress={() => Alert.alert("rezultat","while(a!=b) if(a>b) a=a-b; else b=b-a;")}
          rightIcon="chevron-right"
          
        />
        <RowItem
          text="numararea aparitiilor cifrei K"
          onPress={() => Alert.alert("rezultat","nrap = 0; if (n == 0 && k == 0) nrap = 1; while (n>0) { Cif = n % 10; if (cif == k)nrap++; n = n / 10; }")}
          rightIcon="chevron-right"
          
        />
        <RowItem
          text=". eliminarea cifrelor pare"
          onPress={() => Alert.alert("rezultat","p = 1; nr = 0; while (n>0) { Cif = n % 10; if(cif % 2 != 0) { nr = nr + cif*p; p = p * 10; } n = n / 10; }")}
          rightIcon="chevron-right"
          
        />
        <RowItem
          text="Descompunerea in factori primi."
          onPress={() => Alert.alert("rezultat","d = 2; while (d * d <= n) { m = 0; while ( n % d == 0) { m++; n = n / d;} if (m>0) ... //prelucrare d la puterea m d++; } ")}
          rightIcon="chevron-right"
          
        />
        <RowItem
          text="Cel mai mare nr fibonacci <= n"
          onPress={() => Alert.alert("rezultat","fin>>n; f0 = f1 = 1; while (f0+f1 <= n) { f2 = f0 + f1; f0 = f1; f1 = f2; } Prelucreaza f1 ")}
          rightIcon="chevron-right"
          
        />
        <RowItem
          text="Paste fericit"
          onPress={() => openURL("https://www.google.com/search?q=easter&oq=easter&aqs=chrome.0.0i131i433l5j0j46j0i131i433j46j0i433.3444j0j7&sourceid=chrome&ie=UTF-8")}
          rightIcon="chevron-right"
          
        />
        <RowItem
          text="determinare min si max"
          onPress={() => Alert.alert("rezultat","fin>>n; fin>>a; min=a; for (i=2; i<=n; i++) { fin>>a; if (min<a) min=a; //pentru maximul a n numere, in loc de (min<a) va fi (max>b) } ")}
          rightIcon="chevron-right"
          
        />
        <RowItem
          text="determinare min si max"
          onPress={() => Alert.alert("rezultat","fin>>n; fin>>a; min=a;  for (i=2; i<=n; i++) { fin>>a; if (min<a) min=a; //pentru maximul a n numere, in loc de (min<a) va fi (max>b) } ")}
          rightIcon="chevron-right"
          
        />
        <RowItem
          text="determinare min si max"
          onPress={() => Alert.alert("rezultat","fin>>n; fin>>a; min=a; //presupunem ca minimul este primul element for (i=2; i<=n; i++) { fin>>a; if (min<a) min=a; //pentru maximul a n numere, in loc de (min<a) va fi (max>b) } ")}
          rightIcon="chevron-right"
          
        />
        <RowItem
          text="determinare min si max"
          onPress={() => Alert.alert("rezultat","fin>>n; fin>>a; min=a; //presupunem ca minimul este primul element for (i=2; i<=n; i++) { fin>>a; if (min<a) min=a; //pentru maximul a n numere, in loc de (min<a) va fi (max>b) } ")}
          rightIcon="chevron-right"
          
        />
        <RowItem
          text="determinare min si max"
          onPress={() => Alert.alert("rezultat","fin>>n; fin>>a; min=a; //presupunem ca minimul este primul element for (i=2; i<=n; i++) { fin>>a; if (min<a) min=a; //pentru maximul a n numere, in loc de (min<a) va fi (max>b) } ")}
          rightIcon="chevron-right"
          
        />
        <RowItem
          text="determinare min si max"
          onPress={() => Alert.alert("rezultat","fin>>n; fin>>a; min=a; //presupunem ca minimul este primul element for (i=2; i<=n; i++) { fin>>a; if (min<a) min=a; //pentru maximul a n numere, in loc de (min<a) va fi (max>b) } ")}
          rightIcon="chevron-right"
          
        />
        <RowItem
          text="determinare min si max"
          onPress={() => Alert.alert("rezultat","fin>>n; fin>>a; min=a; //presupunem ca minimul este primul element for (i=2; i<=n; i++) { fin>>a; if (min<a) min=a; //pentru maximul a n numere, in loc de (min<a) va fi (max>b) } ")}
          rightIcon="chevron-right"
          
        />
        <RowItem
          text="determinare min si max"
          onPress={() => Alert.alert("rezultat","fin>>n; fin>>a; min=a; //presupunem ca minimul este primul element for (i=2; i<=n; i++) { fin>>a; if (min<a) min=a; //pentru maximul a n numere, in loc de (min<a) va fi (max>b) } ")}
          rightIcon="chevron-right"
          
        />
       
      </ScrollView>
      </View>
    )
}
