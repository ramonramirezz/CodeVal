
package arrayabs;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class ArrayAbs {
  
    public static void main (String[] args) throws IOException {
        File file = new File("C:\\Users\\csi-proPC\\Desktop\\read.txt");
        BufferedReader buffer = new BufferedReader(new FileReader(file));
        String line;
        while ((line = buffer.readLine()) != null) {
            line = line.trim();
           String array[] = line.split(";");
           String array1[] = array[1].split(",");
           String out = "";
            for (int i = 0; i < array1.length; i++) {
                  for (int j = i+1; j < array1.length; j++) {
                      if (array1[i].equals(array1[j])) {
                          out =array1[i];
                      }
                }
            }
            System.out.println(out);
        }
        
    }
    
}
