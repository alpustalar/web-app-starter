'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { RouteItem, routeItems } from '@/constants';
import Link from 'next/link';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronRight } from 'lucide-react';

export default function AppSidebar() {
  const renderMenuItems = (items: readonly RouteItem[]) => {
    return items.map((item) => {
      if (item.child && item.child.length > 0) {
        return (
          <Collapsible key={item.label} asChild className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  <span>{item.label}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.child.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.label}>
                      <SidebarMenuSubButton asChild>
                        <Link href={subItem.href}>
                          <span>{subItem.label}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        );
      }

      return (
        <SidebarMenuItem key={item.label}>
          <SidebarMenuButton asChild>
            <Link href={item.href}>
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    });
  };

  return (
    <Sidebar variant="sidebar">
      <SidebarHeader className="h-[var(--mobile-h)] desktop:h-[var(--desktop-h)] flex justify-center border-b">
        <h2 className="font-bold px-4 tracking-tight">Zaman Kapsülü</h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigasyon</SidebarGroupLabel>
          <SidebarMenu>{renderMenuItems(routeItems)}</SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-muted" />
          <div className="flex flex-col text-xs">
            <span className="font-medium">Kullanıcı Adı</span>
            <span className="text-muted-foreground">Premium Plan</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
