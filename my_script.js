function show_pic() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {

        console.log("Checked input ID:", input.id);
        if (input.checked && input.id === "radioDefault1") {
            document.getElementById('cha01').style.visibility = 'hidden';
            document.getElementById('des00').style.visibility = 'hidden';

            document.getElementById('cha01').src = 'https://www.svgwaves.io/cutfiles/demon-slayer-49.svg';
            document.getElementById('char-name').innerHTML = 'Kamado Tanjiro.';
            document.getElementById('char-des').innerHTML = 'Tanjiro Kamado, the protagonist of Demon Slayer: Kimetsu no Yaiba, is a kind and compassionate young man with a strong sense of justice. He is the eldest son of a family of charcoal sellers and becomes a Demon Slayer after his family is killed by demons.';

            document.getElementById('cha01').style.paddingTop = '40px';
            document.getElementById('cha01').style.maxHeight = '700px';
            document.getElementById('cha01').style.paddingLeft = '8px';

            document.getElementById('cha01').style.visibility = 'visible';
            document.getElementById('des00').style.visibility = 'visible';

        } else if (input.checked && input.id === "radioDefault2") {

            document.getElementById('cha01').style.visibility = 'hidden';
            document.getElementById('des00').style.visibility = 'hidden';

            document.getElementById('cha01').src = 'https://www.flaticon.com/download/icon/16407549?icon_id=16407549&author=670&team=670&keyword=Steak&pack=16407142&style=color+fill&style_id=1373&format=png&color=%23000000&colored=2&size=512&selection=1&type=standard&search=steak';
            document.getElementById('char-name').innerHTML = 'STEAK.';
            document.getElementById('char-des').innerHTML = 'a thick slice of meat cut for roasting or grilling or frying, sometimes used in a pie or pudding; especially a piece cut from the hind-quarters of the animal.';

            document.getElementById('cha01').style.paddingTop = '190px';
            document.getElementById('cha01').style.maxHeight = '600px';
            document.getElementById('cha01').style.paddingLeft = '0px';

            document.getElementById('cha01').style.visibility = 'visible';
            document.getElementById('des00').style.visibility = 'visible';

        } else if (input.checked && input.id === "radioDefault3") {

            document.getElementById('cha01').style.visibility = 'hidden';
            document.getElementById('des00').style.visibility = 'hidden';
            
            document.getElementById('cha01').src = 'https://www.flaticon.com/download/icon/2299172?icon_id=2299172&author=355&team=355&keyword=Christmas+tree&pack=2299169&style=Flat&style_id=1129&format=png&color=%23000000&colored=2&size=512&selection=1&type=standard&token=03AFcWeA5SJE4OYGxHTbZHyn1hh6MBXfMr2JndG5z909EIOC2guf1dBzsgwW9cVYJfPzCq5SR-wiMVZDgAULGj3W5CUyv27oh4-5MwBK_C6AZZzMN2IdqgA8cmZmjRYO2zaJG16KFzyuOcXvULsnSauAR1Yj5e0sff3preJtPeib_0Jt2BQHmxBlohmbvJS9i6vcQQaBzl49wPvwOXk8BhTn8YReKYmAvM9taY2tF2nzFVzSuOyQsNstE4Lf_IuUtNxg8VB3TeSj7R22lwh33_BhBZK1Eoik7hc_PtDgbtnArhY26o4wIfKTLibm9T8pNxtkO-CMwZe1xov8FDvqu_gbJ-r9PDL59CNSfbiccIe8ULKoHz9IWhXs5L_vffyTmxgodkr97PlNjy0T4pSTVlb6hEh218GEZ9IN1xRsQuXcaxwTCAovvrhIV24hofkAWt8E10ZXFWNd0WB0gffVhxDjYGEDnbNwx8HbDnK7n3FOvddhR2EpaqqRokxk1l12p6S8XPLUQ9Z3G7vCgCiKWwF2IL6y1IakyR8-1WAn0FRBXeWfqF3XKtI8VpnNcxip4HwgnsDPWUTKd7gIjw9KO33Gry-BmvIz42AA84-0DJwrK4CfnXqDlCoBTMZBimyKt3dqVzpCecVFZQsjmy2tO4awv7k52eD7vKGqdN1Us7huAkSPDCYgNaeiee149YcFyRhqm0ePdopod1wuTLuJHaF-2wIq96qzmT8V6DMXildi3P4bHcNa6CsqwMxHsT_JRmfqbd1DGw1Y2ed0Fy5z2rDqt8fXjPuZpXR8EsRLi3bjpV_PmGEN2Yu1qTRvwWBwpH_-DT4S__sb-mJgr1T1CCJ95GuQKPHiIP5rVLZdAL5FNn4--45BlBj_gDTRH1tmdoodRxPdawi72LtyqQi1lYNH8PjFNEEiuBscP1g6mcSgoqL6onHdGlyKOMosLqwtWtIV8T_82xjZ4QFayzdzpXk7ZTM6pmx98QI6H1mHQVjK4Cn0YTtgYb5CZR_MK2IW_3gI_f0RNkT-aPspxJlQK0E8RP6dk9dQckP_dci9JZR2Kci1oZ_vA_RKTLCwrJ64YG-9JiP8HfqGRR-94ycvfR7PAYON5BwnXMfbhmtJGPO27JTf1UbS3bPWLdR_1RzWXJYXLGYQMfmSeZVFMXsl433rVmUKaAZ07IBMmPJvzLh6eOTImkFERwdsDPa4J6u2rG1plBirG9qcQIdmpcnkChUG-nmz5gRpdMviDkh2sYaqJSVpUZVT9HrCC1ZJO_KvhDqpUZBBMuAgFvV7LWBZn5j9CtfPoYt3GdP5si2RfSEviBd-EWYGhXxADLn4D6gNoN1YU1IbHLKiTIYBrx1ozpdnrldEMD8Rqjrx_3bCtjASF2vYw7qtDempxP8jLy7Ly4Yh2vqexSHkDWXk3iM77pa2nf8CM9J4I_B9T3G5Zq4kzA1CzKPzT4YSP2dlTSBCSrJ75rBVh-r432LRfeTATOrutXSbe2IszrAQz-DgWSOP6dERKojPdjc7orwGMvWCV_rDYqRyj7wuGACQbL7O1sQRBlZuytGrNMonmOnklmcSFH8N0lrvxozICz2Tp8WisjKAxt2iNHneKSHPRLi85iycVfRxUrsLtO5Dip5beLykLgy4olScoNdEoLo65M3omujtD6JwZZpX3rOcMkyMNY7T4Y2y5x6gEmd8uoeJnKE1lpGfQ-wujp9vL1rgk1EBDrElNXxfZs-3XfYvn1y5NeFI5WkuUPQOeAR7FwpUAWJh7_P6znzFcu5KjLINRR2BpCOvsMyS3padNsWz4Jnd3VjVviL6alGIKUGtEZiUsudyR991yaNq_fifSkDRT2kc8knxkDlK6tYAxo2x5TbUd53riN--9mpJmvthKUF7SFoeHvLlW9SfE-SxxH04RlAiZlyI-SncPxRe4gl0eHqO_3PKAYZvyzod2uMfVO7Av2BuJ_xKV44TFGsL6dELEk9Tku8wc2OLSRVw_W3-O_4R4HuNKsXRo5GTICALjAyAlFFQUcNUCAZN9jybM&search=christmas';
            document.getElementById('char-name').innerHTML = 'Christmas.';
            document.getElementById('char-des').innerHTML = 'Christmas is a Christian holiday celebrated on December 25th, commemorating the birth of Jesus Christ. It\'s a time for spiritual reflection, celebrating God\'s love, and family gatherings. While rooted in religious traditions, Christmas also incorporates secular traditions and customs.';

            document.getElementById('cha01').style.paddingTop = '160px';
            document.getElementById('cha01').style.maxHeight = '500px';
            document.getElementById('cha01').style.paddingLeft = '0px';

            document.getElementById('cha01').style.visibility = 'visible';
            document.getElementById('des00').style.visibility = 'visible';

        }

    });
}

document.addEventListener('DOMContentLoaded', function () {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('change', show_pic); // Listen to input changes
    });
});
