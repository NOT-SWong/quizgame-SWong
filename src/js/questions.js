function Question(text, pics, choices, answer) {
    this.text = text;
    this.pics = pics;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
};

const questions = [
    new Question("Which of the following is the correct anime and character from the photo?", 
                "img/Neopolitan.jpg", 
                ["RWBY - Neopolitan", "JNPR - Cinder", "CFVY - Emerald", "CRDL - Mercury"], 
                "RWBY - Neopolitan"),

    new Question("Which of the following is the correct anime and character from the photo? (*professional speller right here)", 
                "img/AsuiTsuyu.jpg",
                ["My Hero Academia - Izuku Midiori", "My Hero Academie - Emi Fukukado", "Boku Nu Hero Academie - Ibara Shiozaki", "Boku No Hero Academia - Asui Tsuyu"], 
                "Boku No Hero Academia - Asui Tsuyu"),

    new Question("Which of the following is the correct anime and character from the photo?",
                "img/SaotomeMary.png",
                ["The Irregular at Magic High School - Sayaka Igarashi", "AngelBeats! - Runa Yomozuki", "Classroom of the Elite - Ririka Momobami", "Kakegurui - Mary Saotome"], 
                "Kakegurui - Mary Saotome"),

    new Question("Which of the following is the correct anime and who is the character on the left?", 
                "img/IzumoKamiki.jpg",
                ["Blue Exorcist - Izumo Kamiki", "Black Clover - Mimosa Vermillion", "Noragami - Hiyori Iki", "MobPyscho100 - Shigeo Kageyama"], 
                "Blue Exorcist - Izumo Kamiki"),

    new Question("Which of the following is the correct anime and who is the character with ketchup (*defintely ketchup) on their face?", 
                "img/MayukoNise.jpg",
                ["Darwin's Game - Mamoru Aikawa", "Btooom! - Yuri Honjo", "High-Rise Invasion - Mayuko Nise", "Future Diary - Tenkuu Shinpan"], 
                "High-Rise Invasion - Mayuko Nise"),

    new Question("Which of the following is the correct anime and character from the photo? (UwU)", 
                "img/Phil.jpg",
                ["Owari No Seraph - Shusaku Iwasaki", "The Promised Neverland - Phil", "Higurashi: When They Cry - Furude Rika", "Made in Abyss - Kiyui"], 
                "The Promised Neverland - Phil"),

    new Question("Which of the following is the correct anime and character from the photo? (sleep paralysis demon)", 
                "img/JuuzouSuzuya.jpg",
                ["Akame ga Kill! - Leone", "Tokyo Ghoul - Juuzou Suzuya", "Death Parade - Chisato Miyazaki", "Another - Yukari Sakuragi"], 
                "Tokyo Ghoul - Juuzou Suzuya"),

    new Question("Which of the following is the correct anime and character from the photo?", 
                "img/Kakushi.jpg",
                ["Demon Slayer - Ruka Rengoku", "Damon Sleyer - Enmu", "Kimitsu No Yeiba - Inosuke Hasibira", "Kimestu No Yaiba - Kakushi"], 
                "Kimestu No Yaiba - Kakushi"),

    new Question("Which of the following is the correct anime and character from the photo?", 
                "img/ChizuruSasaki.png",
                ["Free! - Gou Matsuoka", "Yuri!!! on Ice - Kenjiro Minami", "Haikyuu! - Chizuru Sasaki", "Hanebado! - Erena Fujisawa"], 
                "Haikyuu! - Chizuru Sasaki"),

    new Question("Which of the following is the correct anime and character from the photo? (bootiful hoomans)", 
                "img/WatanabeTsuki.jpg",
                ["Love Live! - Kosaka - Yukiho", "Love Live! Sunshine!! - Watanabe Tsuki", "Love Live! School Idol Project - Ayase Arisa", "Love Live! Nijigasaki High School Idol Club - Mifune Shioriko"], 
                "Love Live! Sunshine!! - Watanabe Tsuki"),

    new Question("Which of the following is the correct anime and character from the photo?", 
                "img/MukuroIkusaba.jpg",
                ["Yurikuma Arashi - Lulu Yurigasaki", "Guilty Crown - Mana Ouma", "Danganronpa - Mukuro Ikusaba", "K - Rikio Kamamoto"], 
                "Danganronpa - Mukuro Ikusaba")
];

export {questions};