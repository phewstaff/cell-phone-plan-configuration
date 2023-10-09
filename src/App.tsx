import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import { formSchema } from "./schemas";
import { Label } from "./components/ui/label";
import { Slider } from "./components/ui/slider";
import { Checkbox } from "./components/ui/checkbox";

export default function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert(JSON.stringify(values));
  }

  return (
    <div className="m-auto max-w-7xl p-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-8"
        >
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full md:w-96">
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <Input
                    placeholder="например 8-928-478-88-44"
                    onChange={field.onChange}
                    defaultValue={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="operator"
            render={({ field }) => (
              <FormItem className="w-full md:w-96">
                <FormLabel>Оператор</FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите оператора" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="мегамегафон">мегамегафон</SelectItem>
                    <SelectItem value="билалайн">билалайн</SelectItem>
                    <SelectItem value="МТСсс">МТСсс</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <Label htmlFor="minutes">Минуты</Label>
          <Slider
            onValueChange={() => {}}
            id="minutes"
            defaultValue={[50]}
            max={75}
            step={25}
            className=" min-w-max "
          />

          <div className="flex justify-between">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>

          <Label htmlFor="internet">Интернет:</Label>

          <Slider
            id="internet"
            defaultValue={[50]}
            max={75}
            step={25}
            className="min-w-max"
            onValueChange={() => {}}
          />

          <div className="flex justify-between">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="buy" />
            <Label
              htmlFor="buy"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Купить
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="rent" />
            <Label
              htmlFor="rent"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Арендовать
            </Label>
          </div>

          <Button className="max-w-xs" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
