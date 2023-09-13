import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex flex-col items-start">
        <Select>
          <SelectTrigger className="w-[380px]">
            <SelectValue placeholder="Select Product" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="preWorkout">Pre-Workout</SelectItem>
            <SelectItem value="proteinPulver">Protein Pulver</SelectItem>
            <SelectItem value="mealReplacementShake">
              Meal Replacement Shake
            </SelectItem>
          </SelectContent>
        </Select>
        <Textarea className="mt-5 mb-5 w-[500px] h-[400px]" />
        <div></div>
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default Landing;
