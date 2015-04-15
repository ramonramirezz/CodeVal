
package wordtod;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;


public class WordToD {


      public static void main (String[] args) throws IOException {
        File file = new File("C:\\Users\\csi-proPC\\Desktop\\read.txt");
        BufferedReader buffer = new BufferedReader(new FileReader(file));
        String line;
        while ((line = buffer.readLine()) != null) {
            line = line.trim();
            String array[] = line.split(";");
            String out = "";
            for (int i = 0; i < array.length; i++) {
                switch(array[i]){
                    case "zero": out += "0"; break;
                    case "one": out += "1"; break;
                    case "two": out += "2"; break;
                    case "three": out += "3"; break;
                    case "four": out += "4"; break;
                    case "five": out += "5"; break;
                    case "six": out += "6"; break;
                    case "seven": out += "7"; break;
                    case "eight": out += "8"; break;
                    case "nine": out += "9"; break;    
                }
            }
            System.out.println(out);
        }
    }
    
}
