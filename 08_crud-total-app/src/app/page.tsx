import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowUpIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <div className="p-5 flex gap-2">
        <Button variant={'default'}>default</Button>
        <Button variant={'destructive'}>destructive</Button>
        <Button variant={'ghost'}>ghost</Button>
        <Button variant="link">link</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant={'outline'} size={'icon'} aria-label="Submit">
          <ArrowUpIcon />
        </Button>
      </div>
      <div className="p-5 flex flex-col gap-2 w-100">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email"></Input>
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Type your message here." />
      </div>
    </div>
  );
}
